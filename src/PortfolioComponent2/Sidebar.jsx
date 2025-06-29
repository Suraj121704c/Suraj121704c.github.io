import React from "react";
import styled from "@emotion/styled";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

// user defined imports
import ContactSection from "./SidebarContent/ContactSection";
import SocialMedia from "./SidebarContent/SocialMedia";
import ResumeButton from "./SidebarContent/ResumeButton";
import { Suraj_Singh } from "../utils/images.js";
import SURAJ_SINGH_CV from "../assets/Suraj_Singh_CV.pdf";

export default function Sidebar() {
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
      <SidebarContainerStyled>
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
    width: 70%;
    margin: auto;
    /* border-radius: 20px; */
    overflow: hidden;
    height: 240px;
    margin-top: -100px;
    margin-bottom: 20px;
    border-radius: 43% 57% 55% 45% / 27% 44% 56% 73%;
    border: 2px solid #000;
  }
  .profile_image img {
    object-fit: cover;
  }

  .name {
    font-size: 1.7rem;
    padding: 5px;
  }

  .border_card {
    width: 70%;
    margin: auto;
    border-radius: 5px;
    background-color: #f4f6f5;
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
