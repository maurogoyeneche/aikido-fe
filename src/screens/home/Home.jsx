import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu";
import DojoList from "../../components/DojoList/DojoList";
import ContactView from "../contact/ContactView";
import AboutAiki from "../about/AboutAiki";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <section className={styles.dojoSection}>
        <h1 className="text-center bg-light text-dark p-3">
          Centros de entrenamiento
        </h1>
        <DojoList />
      </section>
      <section className={styles.aboutAiki}>
        <h1 className="text-center bg-light text-dark p-3">Filosofía</h1>
        <AboutAiki />
      </section>
      <section className={styles.contactViewSection}>
        <h1 className="text-center bg-dark text-light p-3">Contáctanos</h1>
        <ContactView />
      </section>
      <Footer />

      {/* <section id="outlet">
        <Outlet />
      </section> */}
    </>
  );
};

export default Home;
