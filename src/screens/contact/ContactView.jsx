import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import styles from "./ContactView.module.css";

import ToastContainer from "react-bootstrap/ToastContainer";
import toastStyles from "../../components/ToastMessage/ToastMessage.module.css";
import Toast from "react-bootstrap/Toast";
import { CheckCircle, XCircle } from "react-bootstrap-icons";

const ContactView = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <>
      <Container className={`${toastStyles.container} mt-5 p-0`}>
        <ToastContainer>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3500}
            autohide
            className={`${toastStyles.toast} ${
              status !== "success" ? "bg-danger" : "bg-success"
            } text-white fs-5 `}
          >
            <Toast.Body>
              {status === "success" ? (
                <>
                  <CheckCircle size={30} className="ms-" />
                  <span className="ms-4">Mensaje enviado. </span>
                </>
              ) : (
                <>
                  <XCircle size={30} className="mr-2" />
                  <span className="ms-4">Algo salió mal. </span>
                </>
              )}
            </Toast.Body>
          </Toast>
        </ToastContainer>

        <h3 className={`bg-dark text-light p-3 m-0`}>
          REPRESENTANTE ISSASK LATAM CARIBE KYOKAI
        </h3>
        <Row className="p-0 g-0 mt-3 d-flex">
          <Col sm={12} md={6} className={`pt-5 pb-5 ${styles.customCol}`}>
            <ContactForm setShow={setShow} setStatus={setStatus} />
          </Col>
          <Col sm={12} md={6} className={`pt-5 pb-5 ${styles.customCol2}`}>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactView;
