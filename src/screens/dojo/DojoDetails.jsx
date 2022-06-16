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
  console.log(dojo);
  return (
    <>
      <Container className="mt-5 m-auto">
        <h3 className={styles.articleTitle}>
          {name} - {branch_off}
        </h3>
        <article className={styles.articleCard}>
          <div className={styles.articleContent}>
            <Image src={image} className={styles.img} />

            <iframe
              title="dojo"
              src={gmap_src}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.articleDetails}>
            <ul>
              <li>
                <b>Direccion:</b> {address}
              </li>
              <li>
                <b>Días:</b>{" "}
                {days.map((day) => (
                  <span>{day} |</span>
                ))}
              </li>
              <li>
                <b>Horario:</b> {hours}
              </li>

              <li>
                <b>Sensei:</b>{" "}
                {sensei.map((sensei) => (
                  <span> {sensei} | </span>
                ))}
              </li>

              <li>
                <b>Telefono/s:</b> {phone} | {phone_other}
              </li>

              <li>
                <b>E-mail:</b> info@aikidouruguay.com
              </li>

              <li>
                <b>Website:</b>{" "}
                <a href="www.aikidouruguay.com">www.aikidouruguay.com</a>
              </li>
            </ul>
          </div>
        </article>
      </Container>
    </>
  );
};

export default DojoDetails;
