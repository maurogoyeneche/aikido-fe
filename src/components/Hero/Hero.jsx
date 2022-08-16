import React from "react";
import styles from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={ styles.hero }>
        <div>
          <div>
            <h1>AIKIDO</h1>
            <h4>TRADICIONAL DENTOU IWAMA RYU</h4>
            <h4>Alumnos directos de Hitohira Saito soke.lorem ipson dolor sit amet........i. blsbla blasldkfjalksdf jhklguyflghhg hjhkgh lgh</h4>
            <button className={ styles.contactanos }>CONTACTANOS</button>
          </div>
          <img src="img/aikido-sensei-jefe.png"/>

        </div>
      </div>
    </>
  );
}

export default Hero;
