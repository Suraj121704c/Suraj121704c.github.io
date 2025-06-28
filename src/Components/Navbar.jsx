import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
  Link,
  Divider,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Md_Faizan_Resume from "../Md_Faizan_Resume.pdf";
import Sidebar from "./Sidebar";
import "animate.css/animate.min.css";
import AOS from "aos";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  console.log(colorMode);
  return (
    <>
      <div>
        <Helmet>
          <title>{`Faizan | ${title}`}</title>
        </Helmet>
      </div>
      <Box
        id="nav-menu"
        pos={"fixed"}
        zIndex="7"
        top="0"
        w={"100%"}
        textTransform={"capitalize"}
        // bg={"white"}

        opacity={"0.8"}
      >
        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >
          <Box height="3.5rem" marginLeft={{ base: "2px", lg: "2rem" }}>
            <Link href="#">
              <Image
                src={
                  colorMode == "dark"
                    ? "https://user-images.githubusercontent.com/106812942/229487542-e60efe9e-10a0-4e3d-9d61-327fe8515666.png"
                    : "https://user-images.githubusercontent.com/106812942/229487542-e60efe9e-10a0-4e3d-9d61-327fe8515666.png"
                }
                height={"3.5rem"}
              />
            </Link>
          </Box>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"50%"}
            justify="space-around"
            align={"center"}
            marginRight="2rem"
          >
            <Link
              onClick={() => setTitle("Home")}
              href="#home"
              className="nav-link home"
              fontWeight="bold"
            >
              home
            </Link>
            <Link
              onClick={() => setTitle("About")}
              href="#about"
              className="nav-link about"
              fontWeight="bold"
            >
              about
            </Link>
            <Link
              onClick={() => setTitle("Skills")}
              href="#skills"
              className="nav-link skills"
              fontWeight="bold"
            >
              skills
            </Link>
            <Link
              onClick={() => setTitle("Projects")}
              href="#projects"
              className="nav-link projects"
              fontWeight="bold"
            >
              projects
            </Link>
            <Link
              onClick={() => setTitle("Contact")}
              href="#contact"
              className="nav-link contact"
              fontWeight="bold"
            >
              contact
            </Link>

            <Button
              width="max-content"
              colorScheme={"red"}
              id="resume-button-1"
              className="nav-link resume"
              fontWeight="bold"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/17ti5ypZ77muuZC6yulNyPwNkgbKfpEM2/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
                href={Md_Faizan_Resume}
                target="_blank"
                rel="noreferrer"
                download="Md_Faizan_Resume.pdf"
              >
                Resume
              </a>
              <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text>
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: "none" }} marginRight="10px">
            <Sidebar />
          </Box>
        </Flex>
        <Divider borderColor="grey.500" />
      </Box>
    </>
  );
};

export default Navbar;
