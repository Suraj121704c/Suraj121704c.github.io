import React from "react";
import { useColorMode } from "@chakra-ui/react";
import About from "./ContentContainer/About";
import Skills from "./ContentContainer/SkillsFolder/Skills";
import ExperienceAndEducation from "./ContentContainer/ExperienceAndEducation/ExperienceAndEducation";
import Projects from "./ContentContainer/Projects/Projects";
import Contact from "./ContentContainer/Contacts/Contact";
import Github from "./ContentContainer/GithubCertificate/Github";
import styled from "@emotion/styled";

export default function MiddleContaner() {
  const { colorMode } = useColorMode();

  return (
    <MiddleContainerStyled colorMode={colorMode}>
      <About />
      <Skills />
      <ExperienceAndEducation />
      <Projects />
      <Github />
      <Contact />
    </MiddleContainerStyled>
  );
}

const MiddleContainerStyled = styled.div`
  width: 90%;
  margin: 30px auto;
  background-color: ${({ colorMode }) =>
    colorMode === "dark" ? "#1a202c" : "transparent"};
  color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
  transition: all 0.3s ease;

  @media (min-width: 100px) and (max-width: 600px) {
    width: 100%;
    border: 1px solid green;
  }
`;
