import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";

// single-page layout pieces
import Navbar from "../PortfolioComponent2/SinglePage/Navbar";
import Hero from "../PortfolioComponent2/SinglePage/Hero";
import AboutSection from "../PortfolioComponent2/SinglePage/AboutSection";
import Footer from "../PortfolioComponent2/SinglePage/Footer";

// reused content sections (data unchanged)
import Skills from "../PortfolioComponent2/ContentContainer/SkillsFolder/Skills";
import ExperienceAndEducation from "../PortfolioComponent2/ContentContainer/ExperienceAndEducation/ExperienceAndEducation";
import Projects from "../PortfolioComponent2/ContentContainer/Projects/Projects";
import Github from "../PortfolioComponent2/ContentContainer/GithubCertificate/Github";
import Contact from "../PortfolioComponent2/ContentContainer/Contacts/Contact";

export default function PortfolioVersion2() {
  const { colorMode } = useColorMode();

  return (
    <Page colorMode={colorMode}>
      <Navbar />
      <Hero />

      <main className="container">
        <AboutSection />

        <section className="block">
          <Skills />
        </section>

        <section className="block">
          <ExperienceAndEducation />
        </section>

        <section id="Projects" className="block">
          <Projects />
        </section>

        <section className="block">
          <Github />
        </section>

        <section className="block">
          <Contact />
        </section>
      </main>

      <Footer />
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  text-align: left;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .block {
    padding: 60px 0;
  }

  #About,
  #Skills,
  #Expe_Edu,
  #Projects,
  #Github,
  #Contacts {
    scroll-margin-top: 90px;
  }

  /* keep reused sections aligned to the new layout */
  .block h1,
  .block h2 {
    text-align: left;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 16px;
    }
    .block {
      padding: 44px 0;
    }
  }
`;
