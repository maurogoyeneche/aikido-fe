import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm } from "react-bootstrap";

const onSubmit = async (values) => {
  console.log(values);
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   actions.resetForm();
};

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

const ContactForm = () => {
  return (
    <div>
      <h5 className=" fw-bold mb-5">Envíanos tu consulta</h5>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
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
        })}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Ingrese su nombre..."
              label="Nombre"
              value={values.name}
              component={MyInput}
              className={
                errors.name && touched.name
                  ? "border-danger pt-2 pb-2"
                  : "pt-2 pb-2"
              }
            />
            <sup className={!errors.name ? "text-danger p-1" : "text-danger"}>
              {touched.name && errors.name}
            </sup>

            <Field
              type="email"
              name="email"
              placeholder="Ingrese su E-mail..."
              label="E-mail"
              component={MyInput}
              className={
                errors.email && touched.email
                  ? "border-danger pt-2 pb-2"
                  : "pt-2 pb-2"
              }
            />
            <sup className={!errors.email ? "text-danger p-1" : "text-danger"}>
              {touched.email && errors.email}
            </sup>
            <Field
              type="number"
              name="phone"
              placeholder="Ingrese su teléfono..."
              label="Teléfono"
              component={MyInput}
              className={
                errors.phone && touched.phone
                  ? "border-danger pt-2 pb-2"
                  : "pt-2 pb-2"
              }
            />
            <sup className={!errors.phone ? "text-danger p-1" : "text-danger"}>
              {touched.phone && errors.phone}
            </sup>
            <Field
              as="textarea"
              name="message"
              placeholder="Ingrese un mensaje..."
              label="Mensaje"
              className={
                errors.message && touched.message
                  ? "border-danger pt-2 pb-2"
                  : "pt-2 pb-2"
              }
              component={MyTextAreaInput}
            />
            <sup
              className={!errors.message ? "text-danger p-1" : "text-danger"}
            >
              {touched.message && errors.message}
            </sup>

            <Button
              variant={
                !errors.name &&
                !errors.email &&
                !errors.phone &&
                !errors.message
                  ? "dark"
                  : "secondary"
              }
              className={" w-25 d-block"}
              type="submit"
              disabled={
                !errors.name &&
                !errors.email &&
                !errors.phone &&
                !errors.message
                  ? false
                  : true
              }
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
