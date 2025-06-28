import { useEffect } from "react";
import "animate.css/animate.min.css";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin, ImWhatsapp } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineDownload } from "react-icons/ai";
import Md_Faizan_Resume from "../Md_Faizan_Resume.pdf";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <Flex
        height={{ base: "80vh", lg: "100vh" }}
        maxHeight={"750px"}
        className="background"
        id="home"
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={"center"}
        justify="center"
        fontSize={"1.3rem"}
        gap={{ base: "4", md: "6", lg: "8" }}
        marginBottom={["40px", "0px", "0px"]}
        // justifyContent={"space-evenly"}
      >
        <Flex
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          padding={"5px"}
        >
          <Heading
            id="user-detail-name"
            fontSize={"2.5rem"}
            textAlign={"start"}
          >
            Hi I am Md Faizan
          </Heading>
          <Text fontSize={"1.4rem"} textAlign={"start"}>
            {" "}
            Full stack web developer
          </Text>
          <Text textAlign={"start"}>
            Aspiring Full Stack Web Developer Skilled in MERN stack with
            hands-on experience in developing scalable websites using a wide
            range of Front-end and Back-end skills like HTML, CSS, JavaScript,
            React, MongoDB, and Node JS.
            <br />
            <br />
            Looking forward to joining a progressive organization with
            opportunities to work on challenging projects.
          </Text>
          <Flex gap={"8"} align="center">
            <Button
              width="max-content"
              colorScheme={"red"}
              id="resume-button-2"
              className="nav-link resume"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/17ti5ypZ77muuZC6yulNyPwNkgbKfpEM2/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-2"
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
            {/* "https://drive.google.com/file/d/17ti5ypZ77muuZC6yulNyPwNkgbKfpEM2/view?usp=sharing" */}
            <Flex gap="3">
              <Link
                id="contact-linkedin"
                href="https://wa.me/916201855200"
                isExternal
              >
                <ImWhatsapp fontSize={"1.6rem"} />
              </Link>{" "}
              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/md-faizan-380a65246/"
                isExternal
              >
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-github"
                href="https://github.com/mdfaizan973"
                isExternal
              >
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-email"
                href="https://faizan.md9735@gmail.com"
                isExternal
              >
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box marginTop={"4rem"} display={{ base: "none", lg: "block" }}>
            <Link href="#about" className="nav-link about">
              <Flex align={"center"} gap="2">
                <span>
                  <BsMouse fontSize={"1.4rem"} />
                </span>
                <Text>scroll down</Text>
                <span>
                  <AiOutlineArrowDown />
                </span>
              </Flex>
            </Link>
          </Box>
        </Flex>
        <Box
          data-aos="fade-up-left"
          height={{ base: "200px", md: "300px", lg: "400px" }}
          overflow="hidden"
          className="profile"
        >
          <Image
            className="animated-image"
            src="https://www.alwin.io/images/wazirx/banner_img.webp"
            // src="https://github.com/mdfaizan973/mdfaizan973/assets/106812942/1ea9a8fd-84b1-40e9-a0df-2c314eb4bf23"
            // src="https://i.pinimg.com/originals/a8/45/76/a845763997f234509fe0fb18deabdbe1.png"
            borderRadius="1.5rem"
            height="100%"
            marginTop={"5px"}
          />
        </Box>
      </Flex>
    </DIV>
  );
};

export default Home;
const DIV = styled.div`
  @media screen and (max-width: 780px) {
    #home {
      margin-top: 70px;
    }
  }
`;
