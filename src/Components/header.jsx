import React from "react";
import { useState } from "react";
import CV from "../assests/cv.pdf";
import { IoMenuOutline } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { BsThreeDotsVertical, BsChatSquareQuote } from "react-icons/bs";
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from "react-icons/ri";

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
          <button id="resume-button-1">
            <a
              href={CV}
              target="_blank"
              download="pdf"
              id="resume-link-1"
              className="nav-link resume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1kkba3IRIWZ7W77s2AZ040myrHEOJVOmh/view?usp=share_link"
                )
              }
            >
              Resume
            </a>
          </button>
        </ul>
        <div id="menu-icon">
          <Popover placement="top" isLazy>
            <PopoverTrigger>
              <IconButton
                aria-label="More server options"
                icon={<IoMenuOutline />}
                variant="solid"
                w="fit-content"
                color="#61dc14"
                width={"30px"}
                background={"none"}
              />
            </PopoverTrigger>
            <PopoverContent
              w="fit-content"
              _focus={{
                boxShadow: "none",
                background: "gray",
                color: "#61dc14",
              }}
            >
              <PopoverBody>
                <Stack>
                  <a href="#home" className="active">
                    {" "}
                    Home
                  </a>

                  <a href="#about" className="active">
                    {" "}
                    About
                  </a>

                  <a href="#skills" className="active">
                    {" "}
                    Skills
                  </a>

                  <a href="#projects"> Projects</a>

                  <a href="#githubs"> GitHub</a>

                  <a href="#contact"> Contactn</a>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
      </header>
    </>
  );
};

export default Header;
