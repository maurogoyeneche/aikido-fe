import React from "react";
import { Figure, Image } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <>
      <div className="p-3 h-100 d-flex flex-column justify-content-between align-items-baseline">
        <div>
          <h5 className=" fw-bold mb-5 p-1 ps-3 text-white bg-dark">
            Información de contacto
          </h5>
          <dl className="d-flex">
            <dt className="me-3"> icono </dt>
            <dd>Direcion Lorem ipsum dolor sit amet.</dd>
          </dl>
          <dl className="d-flex">
            <dt className="me-3"> icono </dt>
            <dd>+598 91 461 534</dd>
          </dl>
          <dl className="d-flex">
            <dt className="me-3"> icono </dt>
            <dd>marcosjsosa@gmail.com</dd>
          </dl>
        </div>
        <Figure>
          <Figure.Image src="img/Kanji-Aikido-PNG-Download-Image.png" />
        </Figure>
      </div>
    </>
  );
};

export default ContactInfo;
