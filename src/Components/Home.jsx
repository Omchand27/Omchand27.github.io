import React from "react";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Project";

const Home = () => {
  return (
    <div id="Home">
      <Navbar />
      <Introduction />
      <Skills />
      <Project/>
      <Contact/>
    </div>
  );
};

export default Home;
