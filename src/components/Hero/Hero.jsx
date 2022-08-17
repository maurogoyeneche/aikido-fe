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
        </div>
      </div>
    </>
  );
}

export default Hero;
