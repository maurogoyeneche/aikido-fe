import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero() {
  const handleScroll = () => {
    console.log(document.body.scrollTop);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.hero}>
        <div>
          <h1>AIKIDO TRADICIONAL</h1>
          <h4>Alumnos directos de Hitohira Saito soke.</h4>
          <Link to="contact" onClick={handleScroll}>
            CONTACTANOS
          </Link>
          <div className="mb-3 position-absolute bottom-0 d-flex flex-column">
            <span>MEMBRESIA</span>

            <div className={`${styles.partners}`}>
              <a href="https://paselibre.uy/" className="p-0 m-0">
                <img
                  src="/img/paselibreLogo.svg"
                  width="120px"
                  alt="pase libre"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
