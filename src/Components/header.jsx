import React from "react";
import { useState } from "react";
import Suraj_Singh_Resume from "../assests/Suraj_Singh_Resume.pdf";
import DropDown from "./dropDown";
import { Button } from "@chakra-ui/react";

const Header = () => {
  const [activeNave, setActiveNav] = useState("#");
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
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
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveNav("#skills")}>
              {" "}
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveNav("#projects")}>
              {" "}
              Projects
            </a>
          </li>
          <li>
            <a href="#githubs" onClick={() => setActiveNav("#githubs")}>
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              {" "}
              Contact
            </a>
          </li>
          <Button id="resume-button-1" backgroundColor={"green"} _hover={{ bg: "green" }}>
            <a
              href={Suraj_Singh_Resume}
              target="_blank"
              download="Suraj_Singh_Resume.pdf"
              id="resume-link-1"
              className="nav-link resume"
              style={{color : "black", backgroundColor : "green"}}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Imnhhw_y6CtRpNZUgv3uLlpNxmULVHqK/view?usp=share_link"
                )
              }
            >
              Resume
            </a>
          </Button>
        </ul>
        <div id="menu-icon">
          <DropDown
            options={[
              <a href="#home">Home</a>,
              <a href="#about">About</a>,
              <a href="#skills">Skills</a>,
              <a href="#projects">Projects</a>,
              <a href="#githubs">GitHub</a>,
              <a href="#contact">Contact</a>,
            ]}
            onSelect={handleOptionSelect}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
