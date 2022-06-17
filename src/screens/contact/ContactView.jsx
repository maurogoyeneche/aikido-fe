import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./ContactView.module.css";

const ContactView = () => {
  return (
    <>
      <Container className="mt-5">
        <h3 className={`bg-dark text-light p-3`}>Contacto</h3>
        <Row className="mt-5">
          <Col sm={12} md={6}>
            <ContactForm />
          </Col>
          <Col sm={12} md={6}>
            contact info
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactView;
