import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import "./styleNavbar.css";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="sticky-top ps-3 pe-3 fw-bold"
      >
        {/* <Container> */}
        <Navbar.Brand>
          <Link to="#home" className="navbar-brand">
            <Image src="/img/iwamashinshinlogo-2.png" className="logo" />
          </Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Link className="nav-link" to="news">
              News
            </Link> */}
            {/* <Link className="nav-link" to="about">
              Sobre Aikido
            </Link> */}
            {/* <Link className="nav-link" to="dojo">
              Dojo
            </Link> */}
            {/* <Link className="nav-link" to="#galeria">
              Galeria
            </Link> */}
            {/* <Link className="nav-link" to="contact">
              Contacto
            </Link> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
}
