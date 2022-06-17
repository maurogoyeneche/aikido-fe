import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import styles from "./ContactView.module.css";

const ContactView = () => {
  return (
    <>
      <Container className="mt-5">
        <h3 className={`bg-dark text-light p-2`}>Contacto</h3>
        <Row className="mt-5">
          <Col sm={12} md={6} className={` mb-5 ${styles.customCol}`}>
            <ContactForm />
          </Col>

          <Col sm={12} md={6} className={`border-start ${styles.customCol}`}>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactView;
