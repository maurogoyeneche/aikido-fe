import React from "react";
import { Whatsapp } from "react-bootstrap-icons";
import styles from "./FloatContactLink.module.css";

const FloatContactLink = () => {
  return (
    <a className={styles.position} href="https://wa.link/6w0di4">
      <Whatsapp size={80} />
    </a>
  );
};

export default FloatContactLink;
