import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/NavbarMenu/ContactForm/ContactForm";

const ContactView = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={6}>
          <ContactForm />
        </Col>
        <Col sm={12} md={6}>
          contact info
        </Col>
      </Row>
    </Container>
  );
};

export default ContactView;
