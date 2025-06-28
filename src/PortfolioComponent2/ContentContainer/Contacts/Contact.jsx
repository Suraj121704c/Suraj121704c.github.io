import React from "react";
import HeaderSection from "../../Helper/HeaderSection";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import styled from "@emotion/styled";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

export default function Contact() {
  const contactList = [
    {
      icon: <MdWhatsapp color="white" size="24px" />,
      text: "+91 - 6201855200",
    },
    {
      icon: <MdEmail color="#1970F1" size="24px" />,
      text: "faizan.md9735@gmail.com",
    },
    {
      icon: <MdLocationOn color="red" size="24px" />,
      text: "Jharkhand, India",
    },
  ];

  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/md-faizan-380a65246/",
      icon: <ImLinkedin fontSize={"1.2rem"} />,
    },
    {
      url: "https://github.com/mdfaizan973",
      icon: <FaGithub fontSize={"1.2rem"} />,
    },
    {
      url: "tel:6201855200",
      icon: <HiPhone fontSize={"1.2rem"} />,
    },
    {
      url: "https://faizan.md9735@gmail.com",
      icon: <HiOutlineMail fontSize={"1.2rem"} />,
    },
  ];

  return (
    <ContactWrapper id="Contacts">
      <HeaderSection title={"Contacts"} />
      <ContentWrapper>
        <ContactList>
          {contactList.map((ele, i) => (
            <StyledContact key={i}>
              {ele.icon}
              <span>{ele.text}</span>
            </StyledContact>
          ))}
        </ContactList>
        <MapSection>
          <img
            style={{ borderRadius: "50%", height: "100%", width: "100%" }}
            src="https://i.ibb.co/K7rjZTZ/Coming-1.png"
          />
        </MapSection>
      </ContentWrapper>
      <br />
      <SocialContainer>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </SocialLink>
        ))}
      </SocialContainer>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://readme-typing-svg.herokuapp.com?font=Architects+Daughter&amp;color=red&amp;size=24&amp;lines=Thanks!+For+Visiting+My+Profile!;See+You+Next-Time+Hope+u+like+it...👨🏻‍💻;"
          alt="Thank You"
          style={{ marginLeft: "25px" }}
        />
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  padding: 20px;
  /* background-color: #f9f9f9; */
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactList = styled.div`
  background-color: #daf7f1;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MapSection = styled.div`
  background-color: #d7def1;
  width: 240px;
  height: 240px; /* Maintain 1:1 aspect ratio for the circle */
  border-radius: 50%; /* Creates the circular shape */
  padding: 10px;
  margin: 0 auto; /* Center horizontally */
  display: flex;
  justify-content: center;
  align-items: center; /* Centers the content inside */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
const StyledContact = styled.button`
  display: flex;
  align-items: center;
  background-color: #48a3a6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 15px;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #367d82;
    transform: translateY(-3px);
  }

  span {
    margin-left: 12px;
    font-size: 18px;
    color: #f0f0f0;
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 16px;
    span {
      font-size: 16px;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 10px 0;
`;

const SocialLink = styled.a`
  background-color: #daf7f1;
  color: white;
  border-radius: 50%;
  padding: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #367d82;
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.2rem;
  }
`;
