import React from "react";
import { useState } from "react";
import CV from "../assests/cv.pdf"

const Header = () => {
  const [activeNave, setActiveNav] = useState("#");
  return (
    <>
      <header id="nav-menu">
        <a href="#" className="logo" onClick={() => setActiveNav("#")}>
          {" "}
          Suraj <span> Singh </span>
        </a>
        <ul className="navlist">
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setActiveNav("#home")}
            >
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveNav("#about")}> About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveNav("#skills")}> Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveNav("#skills")}> Projects</a>
          </li>
          <li>
            <a href="#githubs" onClick={() => setActiveNav("#githubs")}> GitHub</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}> Contact</a>
          </li>
          <button id="resume-button-1">
            <a
              href={CV}
              target="_blank"
              download="pdf"
              id="resume-link-1"
              className="nav-link resume"
            >
              Resume
            </a>
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;
