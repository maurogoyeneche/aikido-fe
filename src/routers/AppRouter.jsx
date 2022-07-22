import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Post from "../components/Post/Post";
// import PostList from "../components/PostList/PostList";
import AboutAiki from "../screens/about/AboutAiki";
import Home from "../screens/home/Home";

import ContactView from "../screens/contact/ContactView";
// import DojoDetails from "../screens/dojo/DojoDetails";
import DojoList from "../components/DojoList/DojoList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          {/* <Route path="news" element={<PostList />} /> */}
          <Route path="about" element={<AboutAiki />} />
          <Route index element={<ContactView />} />
          <Route path="contact" element={<ContactView />} />
          <Route path="dojo" element={<DojoList />} />
          <Route path="*" element={<ContactView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
