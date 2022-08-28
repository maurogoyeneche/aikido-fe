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
        <h1 className="text-center">Dojo</h1>
        <DojoList />
        <section className={styles.aboutAiki}>
          <AboutAiki />
        </section>
      </section>
      <section className={styles.contactViewSection}>
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
