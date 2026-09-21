"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TURNSTILE_SITE_KEY, loadTurnstileScript } from "@/lib/turnstile";

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  surname: string;
}

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  surname: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Ingrese un nombre")
    .trim("No incluyas espacios en blanco al principio ni al final")
    .strict(true)
    .matches(/^(?!\s*$)[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, "Ingrese solo letras")
    .max(50, "Máximo 50 caracteres")
    .min(3, "Mínimo 3 caracteres"),
  email: Yup.string()
    .required("Ingrese un e-mail")
    .email("Ingrese un e-mail válido")
    .max(128, "Máximo 128 caracteres")
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "Ingrese un e-mail válido"
    ),
  phone: Yup.string()
    .matches(/^(?!\s*$)[0-9*#\-+()\s]*$/, "Ingrese un número válido")
    .max(32, "Debe tener un máximo 32 caracteres"),
  message: Yup.string()
    .required("Ingrese un mensaje")
    .trim("No incluyas espacios en blanco al principio ni al final")
    .strict(true)
    .matches(
      /^(?!\s*$)[A-Za-zÀ-ÖØ-öø-ÿ0.,\s]*$/,
      "Ingrese un mensaje válido, sin caracteres especiales"
    )
    .max(500, "Máximo 500 caracteres"),
  surname: Yup.string(),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderTurnstile = useCallback(
    (turnstile: NonNullable<Window["turnstile"]>) => {
      if (!turnstileRef.current || widgetIdRef.current !== null) return;
      widgetIdRef.current = turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
    },
    []
  );

  useEffect(() => {
    let cancelled = false;
    loadTurnstileScript()
      .then((turnstile) => {
        if (!cancelled) renderTurnstile(turnstile);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderTurnstile]);

  const resetCaptcha = () => {
    if (window.turnstile && widgetIdRef.current !== null) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setCaptchaToken("");
  };

  const handleSubmit = async (values: ContactValues) => {
    if (!captchaToken) {
      toast.error("Esperá a que se complete la verificación anti-bot");
      return;
    }
    if (values.surname !== "") {
      toast.error("Algo salió mal. Intentá nuevamente.");
      return;
    }
    try {
      setLoading(true);
      await axios.post("https://aikido-be.vercel.app/send-mail", {
        ...values,
        captchaToken,
      });
      toast.success("Mensaje enviado.");
    } catch {
      toast.error("Algo salió mal. Intentá nuevamente.");
    } finally {
      setLoading(false);
      resetCaptcha();
    }
  };

  return (
    <div className="px-3">
      <h5 className="mb-4 bg-black p-2 pl-3 font-bold text-white">
        Envíanos tu consulta
      </h5>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4">
            <Field
              type="text"
              name="surname"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute -left-[9999px] -top-[9999px] h-px w-px overflow-hidden"
            />

            <div>
              <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">Nombre</label>
              <Field as={Input} id="contact-name" name="name" placeholder="Ingrese su nombre..." />
              {touched.name && errors.name && (
                <span className="text-sm text-destructive">{errors.name}</span>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">E-mail</label>
              <Field as={Input} id="contact-email" type="email" name="email" placeholder="Ingrese su E-mail..." />
              {touched.email && errors.email && (
                <span className="text-sm text-destructive">{errors.email}</span>
              )}
            </div>

            <div>
              <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium">Teléfono</label>
              <Field as={Input} id="contact-phone" name="phone" placeholder="Ingrese su teléfono..." />
              {touched.phone && errors.phone && (
                <span className="text-sm text-destructive">{errors.phone}</span>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">Mensaje</label>
              <Field as={Textarea} id="contact-message" name="message" rows={4} placeholder="Ingrese un mensaje..." />
              {touched.message && errors.message && (
                <span className="text-sm text-destructive">{errors.message}</span>
              )}
            </div>

            <div ref={turnstileRef} />

            <Button type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
