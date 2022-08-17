import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu";

const Home = () => {
  const news = ["noticia1", "noticia2", "noticia3"];
  return (
    <>
      <NavbarMenu />
      <Hero news={news} />
      <Outlet />
    </>
  );
};

export default Home;
