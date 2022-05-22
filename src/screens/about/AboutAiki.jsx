import React from "react";

const AboutAiki = () => {
  return (
    <div className="d-flex flex-column w-100 align-items-center">
      <article className=" col-md-6  w-100 mb-5 mt-5">
        <h3 className="bg-dark text-light p-3 ">Filosofía</h3>
        <div className="row g-0 align-items-center">
          <div className="col-sm-6 col-md-3 text-center">
            <img className="" src="img/img-aiki-daijin.png" alt="" />
          </div>
          <div className="col-sm-6 col-md-9 ">
            <p className="fs-4 text-start p-3 ">
              We preserve and share the great influence of my father Morihiro
              while remaining faithful to the technical and spiritual heritage
              left by the Founder Morihei Ueshiba.
            </p>
            <p className="fs-4  text-start p-3 ">
              We continually try to improve ourselves through the intensive and
              systematic practice of kihon , and we believe each training
              session is a unique opportunity to feel closer to the Founder. I
              firstly apply this permanent training to myself.
            </p>
            <p className="fs-4  text-end p-3">
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
        <div className="p-3">
          <iframe
            width="100%"
            height="564"
            src="https://www.youtube.com/embed/CoUlKdN-kgQ"
            title="Entrevista a Saito Hitohira - Iwama ShinShin Aiki Shurenkai"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </article>
    </div>
  );
};

export default AboutAiki;
