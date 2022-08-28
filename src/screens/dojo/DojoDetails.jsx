import React from "react";
import styles from "./DojoDetails.module.css";
import { Container, Image } from "react-bootstrap";

const DojoDetails = ({ dojo }) => {
  const {
    name,
    branch_off,
    days,
    image,
    hours,
    address,
    gmap_src,
    phone,
    phone_other,
    sensei,
  } = dojo;

  return (
    <Container className="mt-3 mb-3 m-auto">
      <h3 className={styles.articleTitle}>
        {name} - {branch_off}
      </h3>
      <article className={styles.articleCard}>
        <div className={styles.articleContent}>
          <iframe
            src={gmap_src}
            width="100%"
            height="100%"
            style={{ border: 0, height: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.articleDetails}>
          <div className="mb-3">
            <h3 className="m-0">
              <strong>Direccion: </strong>
            </h3>
            {address}
            <h6 className="mt-3">
              <strong>Telefono/s:</strong>
            </h6>
            <p className="m-0 p-0">{phone}</p>
          </div>
          <div className="mb-3">
            <h6 className="m-0 ">
              <strong>Dias y Horarios: </strong>{" "}
            </h6>
            {days.map((day, index) => (
              <span>{index == 0 ? `${day} y ` : `${day} `}</span>
            ))}
            de {hours}
          </div>
          <div className="">
            <h3 className="m-0">
              <strong>Representante</strong>
            </h3>
            {sensei.map((sensei, index) => (
              <span> {index == 0 ? `${sensei} & ` : sensei}</span>
            ))}
            <h6 className="m-0 mt-3">
              <strong>E-mail:</strong>
            </h6>
            info@aikidouruguay.com
          </div>
        </div>
      </article>
    </Container>
  );
};

export default DojoDetails;
