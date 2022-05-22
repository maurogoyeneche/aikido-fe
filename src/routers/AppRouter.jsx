import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AboutAiki from "../screens/about/AboutAiki";
import Home from "../screens/home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutAiki />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
