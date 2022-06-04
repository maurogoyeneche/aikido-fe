import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu";

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
