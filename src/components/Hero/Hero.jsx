import React from "react";
import style from "./Hero.module.css";
import { Container } from "react-bootstrap";

function Hero({ news }) {
  return (
    <Container>
      <div className={style.hero}>
        <div className={style.heroImage}>
          <img src="" alt="Hero Image" />
        </div>
        <div className={style.heroTitle}>
          <h1>AIKIDO</h1>
          {news.map((noticia) => (
            <p className={style.heroContent}>{noticia}</p>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Hero;
