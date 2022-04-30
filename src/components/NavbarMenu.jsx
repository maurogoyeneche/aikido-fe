import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import "./styles/styleNavbar.css";
import { Link } from "react-router-dom";
<Link to="#home" className="navbar-brand">
  <Image src="/img/iwamashinshinlogo-2.png" className="logo" />
</Link>;
export default function NavbarMenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand>
            <Link to="#home" className="navbar-brand">
              <Image src="/img/iwamashinshinlogo-2.png" className="logo" />
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="#news">
                News
              </Link>
              <Link className="nav-link" to="#dojo">
                Dojo
              </Link>
              <Link className="nav-link" to="#galeria">
                Galeria
              </Link>
              <Link className="nav-link" to="#contact">
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
