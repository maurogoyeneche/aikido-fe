import React from "react";
import { Figure } from "react-bootstrap";
import styles from "./ContactInfo.module.css";
// import * as Icon from "react-bootstrap-icons";
import { GeoAlt, TelephoneFill, Envelope } from "react-bootstrap-icons";

const ContactInfo = () => {
  return (
    <>
      <div className=" ps-3 pe-3 h-100 d-flex flex-column justify-content-between align-items-baseline">
        <div className="w-100">
          <h5 className=" fw-bold mb-5 p-2 ps-3 text-white bg-dark">
            Información de contacto
          </h5>
          <dl className="d-flex">
            <dt className="me-3">
              <GeoAlt />
            </dt>
            <dd>Bv. Gral. Artigas 2498</dd>
          </dl>
          <dl className="d-flex">
            <dt className="me-3">
              <TelephoneFill />
            </dt>
            <dd>+598 91 461 534</dd>
          </dl>
          <dl className="d-flex">
            <dt className="me-3">
              <Envelope />
            </dt>
            <dd>
              <a className={styles.link} href="mailto:marcosjsosa@gmail.com  ">
                marcosjsosa@gmail.com{" "}
              </a>
            </dd>
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
