import React from "react";
import { Figure } from "react-bootstrap";
// import * as Icon from "react-bootstrap-icons";
import { GeoAlt, TelephoneFill, Envelope } from "react-bootstrap-icons";

const ContactInfo = () => {
  return (
    <>
      <div className=" ps-3 pe-3 h-100 d-flex flex-column justify-content-between align-items-baseline">
        <div className="w-100">
          <h5 className=" fw-bold mb-5 p-1 ps-3 text-white bg-dark">
            Información de contacto
          </h5>
          <dl className="d-flex">
            <dt className="me-3">
              <GeoAlt />
            </dt>
            <dd>Direcion Lorem ipsum dolor sit amet.</dd>
          </dl>
          <dl className="d-flex">
            <dt className="me-3">
              <TelephoneFill />
            </dt>
            <dd>+598 91 461 534</dd>
          </dl>
          <dl className="d-flex">
            <dt className="me-3">
              {" "}
              <Envelope />{" "}
            </dt>
            <dd>marcosjsosa@gmail.com</dd>
          </dl>
        </div>
        <Figure className="m-0">
          <Figure.Image
            src="img/Kanji-Aikido-PNG-Download-Image.png"
            alt="Aikido"
            className="m-0"
          />
        </Figure>
      </div>
    </>
  );
};

export default ContactInfo;
