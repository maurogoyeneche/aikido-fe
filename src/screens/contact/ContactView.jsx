import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import styles from "./ContactView.module.css";

const ContactView = () => {
  return (
    <>
      <Container className="mt-5 p-0 ">
        <h3 className={`bg-dark text-light p-2 m-0`}>Contacto</h3>
        <Row className="p-0 g-0 mt-3 d-flex">
          <Col sm={12} md={6} className={`pt-5 pb-5 ${styles.customCol}`}>
            <ContactForm />
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
