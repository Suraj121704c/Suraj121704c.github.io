import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import MiniPro from "../Components/MiniPro";
import Education from "../Components/Education";
import Certificate from "../Components/Certificate";
import Github from "../Components/Github";
import Contacts from "../Components/Contacts";

export default function PortfolioVersion1() {
  return (
    <div>
      <AnimatedCursor />
      {/* <Part /> */}
      {/* <Carousal /> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Carousal /> */}
      <Projects />
      <MiniPro />
      <Education />
      <Certificate />
      <Github />
      <Contacts />
    </div>
  );
}
