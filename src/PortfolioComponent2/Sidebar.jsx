import React from "react";
import styled from "@emotion/styled";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/react";

// user defined imports
import ContactSection from "./SidebarContent/ContactSection";
import SocialMedia from "./SidebarContent/SocialMedia";
import ResumeButton from "./SidebarContent/ResumeButton";
import { Suraj_Singh } from "../utils/images.js";
import SURAJ_SINGH_CV from "../assets/Suraj_Singh_CV.pdf";

export default function Sidebar() {
  const { colorMode } = useColorMode();

  const contectArray = [
    {
      icon: <MdWhatsapp />,
      heading: "Phone No",
      contact: "+91 6387389485",
      color: "green",
      link: "https://wa.me/916387389485",
    },
    {
      icon: <MdEmail />,
      heading: "Email",
      contact: "nhb668912@gmail.com",
      color: "blue",
      link: "https://nhb668912@gmail.com",
    },
    {
      icon: <MdLocationOn />,
      heading: "Banglore, India",
      contact: "Banglore, India",
      color: "red",
      link: "https://www.google.com/maps/place/Banglore,+Karnataka/",
    },
  ];

  const socilaIcons = [
    {
      icon: <BsTwitter />,
      color: "black",
      link: "https://x.com/Suraj121704C",
    },
    {
      icon: <ImLinkedin />,
      color: "skyblue",
      link: "https://www.linkedin.com/in/suraj-singh-22844a257/",
    },
    {
      icon: <FaGithub />,
      color: "black",
      link: "https://github.com/Suraj121704C",
    },
    {
      icon: <FaYoutube />,
      color: "red",
      link: "https://www.youtube.com/c/PsychoPlayers1?app=desktop",
    },
  ];
  return (
    <>
      <SidebarContainerStyled colorMode={colorMode}>
        <div className="profile_image">
          <img src={Suraj_Singh} alt="profile" />
        </div>
        <h1 className="name">Suraj Singh</h1>
        <div className="occupation border_card">
          Full Stack Mobile & Web Developer
        </div>

        <div className="socialmedia_section">
          {socilaIcons.map((ele, i) => (
            <SocialMedia data={ele} />
          ))}
        </div>
        {/* Contact Section */}
        <div className="contact_section border_card">
          {contectArray.map((ele, i) => (
            <ContactSection data={ele} />
          ))}
        </div>

        <div
          className="resume_sectiion"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1FxX6KlIwwyw6qQ4K67Lgzrl_2TmCPaK7/view?usp=sharing",
              "_blank"
            );
          }}
        >
          <a
            id="resume-link-1"
            href={SURAJ_SINGH_CV}
            target="_blank"
            rel="noreferrer"
            download="Suraj_Singh_Resume.pdf"
          >
            <ResumeButton />
          </a>
        </div>
      </SidebarContainerStyled>
    </>
  );
}

const SidebarContainerStyled = styled.div`
  .profile_image {
    width: 150px;
    height: 150px;
    margin: -90px auto 18px;
    overflow: hidden;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.35);
  }
  .profile_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid
      ${({ colorMode }) => (colorMode === "dark" ? "#111827" : "#ffffff")};
  }

  .name {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    padding: 4px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
  }

  .occupation {
    font-size: 0.82rem !important;
    font-weight: 500;
    padding: 8px 12px !important;
    color: ${({ colorMode }) =>
      colorMode === "dark" ? "#c7d2fe" : "#4f46e5"} !important;
    background-color: ${({ colorMode }) =>
      colorMode === "dark"
        ? "rgba(99,102,241,0.15)"
        : "rgba(99,102,241,0.08)"} !important;
  }

  .border_card {
    width: 78%;
    margin: auto;
    border-radius: 14px;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(148,163,184,0.07)" : "rgba(15,23,42,0.03)"};
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#0f172a")};
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.1)" : "rgba(15,23,42,0.05)"};
    transition: all 0.3s ease;
  }
  .socialmedia_section {
    width: 75%;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
  }
  .contact_section {
    width: 87%;
    margin: 10px auto;
  }

  .resume_sectiion {
    width: 65%;
    margin: 20px auto;
  }
`;
