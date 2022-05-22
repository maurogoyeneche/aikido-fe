import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
const Home = () => {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <Outlet />
    </>
  );
};

export default Home;
