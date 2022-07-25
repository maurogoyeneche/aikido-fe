import React from "react";
import { Outlet } from "react-router-dom";
import FloatContactLink from "../../components/FloatContactLink/FloatContactLink";
import Hero from "../../components/Hero/Hero";
import NavbarMenu from "../../components/NavbarMenu/NavbarMenu";

const Home = () => {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <Outlet />
      <FloatContactLink />
    </>
  );
};

export default Home;
