import React from "react";
import { Container } from "react-bootstrap";

const AboutAiki = () => {
  return (
    <Container>
      <div className="d-flex flex-column w-100 align-items-center">
        <article className=" col-md-6  w-100 mb-5 mt-5">
          {/* <h3 className="bg-light text-dark p-3 ">Filosofía</h3> */}
          <div className="row g-0 align-items-center">
            <div className="col-sm-6 col-md-3 text-center">
              <img className="" src="img/img-aiki-daijin.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-9 ">
              <p className="fs-4 p-4 ">
                Conservamos y compartimos la gran influencia de mi padre
                Morihiro manteniéndonos fiel a la herencia técnica y a la
                espiritualidad dejada por el Fundador Morihei Ueshiba.
              </p>
              <p className="fs-4  p-4 ">
                Continuamente tratamos de mejorarnos a nosotros mismos a través
                del intensivo y práctico sistemática de kihon. Creemos que cada
                entrenamiento y cada sesión es una oportunidad única para
                sentirse más cerca del Fundador. Yo soy el primero en aplicar
                día a día, este entrenamiento constante.
              </p>
              <p className="fs-4  text-end p-4">
                Hitohira Saito{" "}
                <span className="d-block fs-6">
                  Iwama Shinshin Aiki Shurenkai.
                </span>
              </p>
            </div>
          </div>
        </article>
        <article className=" col-md-6  w-100 ">
          <h3 className="bg-dark text-light p-3">
            Más sobre Iwama ShinShin Aikishurenkai
          </h3>
          <div className="">
            <iframe
              width="100%"
              height="564"
              src="https://www.youtube.com/embed/CoUlKdN-kgQ"
              title="Entrevista a Saito Hitohira - Iwama ShinShin Aiki Shurenkai"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
        </article>
      </div>
    </Container>
  );
};

export default AboutAiki;
