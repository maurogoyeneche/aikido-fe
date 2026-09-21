import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ContactForm.module.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm, Spinner } from "react-bootstrap";
import axios from "axios";

const TURNSTILE_SITE_KEY = "0x4AAAAAAE-VIrYvNB8Er7Ov";
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js";

const loadTurnstileScript = () =>
  new Promise((resolve, reject) => {
    if (window.turnstile) {
      resolve(window.turnstile);
      return;
    }
    const existing = document.querySelector(
      `script[src="${TURNSTILE_SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(window.turnstile));
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.turnstile);
    script.onerror = reject;
    document.body.appendChild(script);
  });

//TODO: modularizar a custom UI
const MyInput = ({ label, field, ...props }) => {
  return (
    <BootstrapForm.Group className={styles.myInput}>
      <BootstrapForm.Label className="mb-0">{label}</BootstrapForm.Label>
      <BootstrapForm.Control {...field} {...props} />
    </BootstrapForm.Group>
  );
};
const MyTextAreaInput = ({ label, field, ...props }) => {
  return (
    <BootstrapForm.Group className={styles.myTextarea}>
      <BootstrapForm.Label className="mb-0">{label}</BootstrapForm.Label>
      <BootstrapForm.Control {...field} {...props} as="textarea" />
    </BootstrapForm.Group>
  );
};

const ContactForm = ({ setShow, setStatus }) => {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  const error = new Error({ message: "Get out of here!" });

  const renderTurnstile = useCallback((turnstile) => {
    if (!turnstileRef.current || widgetIdRef.current !== null) return;
    widgetIdRef.current = turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token) => {
        setCaptchaToken(token);
        setCaptchaError("");
      },
      "expired-callback": () => setCaptchaToken(""),
      "error-callback": () => setCaptchaToken(""),
    });
  }, []);

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

  const sendMail = async (values) => {
    try {
      setLoading(true);
      await axios({
        method: "post",
        url: "https://aikido-be.vercel.app/send-mail",
        data: { ...values, captchaToken },
      });
      setStatus("success");
      setShow(true);
    } catch (error) {
      setStatus("danger");
      setShow(true);
      throw error;
    } finally {
      setLoading(false);
      resetCaptcha();
    }
  };
  const handleSubmit = async (values) => {
    if (!captchaToken) {
      setCaptchaError("Esperá a que se complete la verificación anti-bot");
      return;
    }
    if (values.surname === "") {
      await sendMail(values);
    } else {
      setShow(true);
      setStatus("danger");

      throw error;
    }
  };

  return (
    <div className="ps-3 pe-3 ">
      <h5 className=" fw-bold mb-4 p-2 ps-3 text-white bg-dark">
        Envíanos tu consulta
      </h5>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
          surname: "",
        }}
        validationSchema={Yup.object({
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
            .max(128, "Must be 128 characters or less")
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
              "Ingrese un mensáje válido, sin caracteres especiales"
            )
            .max(500, "Debe tener un máximo 500 caracteres"),
          surname: Yup.string()
            .trim()
            .strict(true)
            .matches(/^(?!\s*$)[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, "Ingrese solo letras"),
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          /* and other goodies */
        }) => (
          <Form>
            <Field
              type="text"
              name="surname"
              value={values.surname}
              component={MyInput}
              placeholder="do not complete if you are a human"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className={styles.honeypot}
            />
            <Field
              type="text"
              name="name"
              placeholder="Ingrese su nombre..."
              label="Nombre"
              value={values.name}
              component={MyInput}
              className={errors.name && touched.name && "border-danger "}
            />
            <span className={!errors.name ? "text-danger p-1" : "text-danger"}>
              {touched.name && errors.name}
            </span>

            <Field
              type="email"
              name="email"
              placeholder="Ingrese su E-mail..."
              label="E-mail"
              component={MyInput}
              className={errors.email && touched.email && "border-danger"}
            />
            <span className={!errors.email ? "text-danger p-1" : "text-danger"}>
              {touched.email && errors.email}
            </span>
            <Field
              type="number"
              name="phone"
              placeholder="Ingrese su teléfono..."
              label="Teléfono"
              component={MyInput}
              className={errors.phone && touched.phone && "border-danger"}
            />
            <span className={!errors.phone ? "text-danger p-1" : "text-danger"}>
              {touched.phone && errors.phone}
            </span>
            <Field
              as="textarea"
              name="message"
              placeholder="Ingrese un mensaje..."
              label="Mensaje"
              rows="4"
              className={errors.message || (touched.message && "border-danger")}
              component={MyTextAreaInput}
            />
            <span
              className={!errors.message ? "text-danger p-1 " : "text-danger"}
            >
              {touched.message && errors.message}
            </span>

            <div ref={turnstileRef} className="mb-2" />
            {captchaError && (
              <span className="text-danger p-1 d-block">{captchaError}</span>
            )}

            <Button
              id={styles.submit}
              variant={
                !loading &&
                !errors.name &&
                !errors.email &&
                !errors.phone &&
                !errors.message
                  ? "dark"
                  : "secondary"
              }
              className={`d-block ${styles.submit} p-2 fs-4`}
              type="submit"
              disabled={
                !loading &&
                !errors.name &&
                !errors.email &&
                !errors.phone &&
                !errors.message
                  ? false
                  : true
              }
            >
              {loading ? (
                <Spinner animation="border" variant="light" />
              ) : (
                "Enviar"
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
