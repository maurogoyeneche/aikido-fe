import React from "react";
import styles from "./DojoDetails.module.css";
import { Container, Image } from "react-bootstrap";

const DojoDetails = () => {
  return (
    <>
      <Container style={{ marginTop: "1rem", maxWidth: "80%" }}>
        <h3 className={styles.articleTitle}>
          Shinshin Aiki Shuren Kai - Tres cruces
        </h3>
        <article className={styles.articleCard}>
          <div className={styles.articleContent}>
            <Image src="../../img/logo_iwama_ryu.png" className={styles.img} />

            <iframe
              title="dojo"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3202.3688080438924!2d-56.16595213012299!3d-34.89412717934591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1653855476632!5m2!1ses-419!2suy"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.articleDetails}>
            <ul>
              <li>
                <b>Direccion:</b> Bvar. Artigas 1825, Entre Goes y Dr. Salvador
                Ferrer Serra, Montevideo
              </li>

              <li>
                <b>Profesor:</b> Masashi Okubo
              </li>

              <li>
                <b>Telefono:</b> (+598) 12 030 405
              </li>

              <li>
                <b>E-mail:</b> aikido@aikido.com.uy
              </li>

              <li>
                <b>Website:</b> _____________________
              </li>
            </ul>
          </div>
        </article>
      </Container>
    </>
  );
};

export default DojoDetails;
