import React from "react";

import style from "./Hero.module.css";



function Hero({ news }) {
  return (
    <>
      <div className={ styles.hero }>
        <div>
          <h1>
            AIKIDO TRADICIONAL
          </h1>
          <h4>Alumnos directos de Hitohira Saito soke.</h4>
          <button>CONTACTANOS</button>
        </div>
      </div>
  );
}

export default Hero;
