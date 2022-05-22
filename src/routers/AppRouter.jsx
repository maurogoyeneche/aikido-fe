import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";
import Post from "../components/Post/Post";
import AboutAiki from "../screens/about/AboutAiki";
import Home from "../screens/home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="news" element={<Post />} />
          <Route path="about" element={<AboutAiki />} />
        </Route>

        {/* <Route exact path="/about" element={<AboutAiki />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
