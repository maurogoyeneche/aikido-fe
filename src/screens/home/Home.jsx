import React from "react";
import Hero from "../../components/Hero/Hero";
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
const Home = () => {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <NewsGrid />
    </>
  );
};

export default Home;
