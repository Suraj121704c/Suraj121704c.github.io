import React from "react";
import About from "./ContentContainer/About";
import Skills from "./ContentContainer/SkillsFolder/Skills";
import ExperienceAndEducation from "./ContentContainer/ExperienceAndEducation/ExperienceAndEducation";
import Projects from "./ContentContainer/Projects/Projects";
import Contact from "./ContentContainer/Contacts/Contact";
import Github from "./ContentContainer/GithubCertificate/Github";
import styled from "@emotion/styled";

export default function MiddleContaner() {
  return (
    <div
      style={{
        width: "90%",
        margin: "30px auto",
      }}
    >
      <About />
      <Skills />
      <ExperienceAndEducation />
      <Projects />
      <Github />
      <Contact />
    </div>
  );
}

const MiddleContainerStyled = styled.div`
  width: "90%";
  margin: "30px auto";
  @media (min-width: 100px) and (max-width: 600px) {
    width: "100%";
    border: 1px solid green;
  }
`;
