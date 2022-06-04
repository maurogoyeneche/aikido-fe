import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Post from "../components/Post/Post";
import PostList from "../components/PostList/PostList";
import AboutAiki from "../screens/about/AboutAiki";
import Home from "../screens/home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="news" element={<PostList />} />
          <Route path="about" element={<AboutAiki />} />
        </Route>

        {/* <Route exact path="/about" element={<AboutAiki />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
