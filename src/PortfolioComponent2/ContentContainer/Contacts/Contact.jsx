import React from "react";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

// user defined imports
import HeaderSection from "../../Helper/HeaderSection";
import { Photo } from "../../../utils/images";
import "./Contact.css";

export default function Contact() {
  const contactList = [
    {
      icon: <MdWhatsapp color="white" size="24px" />,
      text: "+91 - 6387389485",
    },
    {
      icon: <MdEmail color="#1970F1" size="24px" />,
      text: "nhb668912@gmail.com",
    },
    {
      icon: <MdLocationOn color="red" size="24px" />,
      text: "Banglore, India",
    },
  ];

  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/suraj-singh-22844a257/",
      icon: <ImLinkedin fontSize={"1.2rem"} />,
    },
    {
      url: "https://github.com/Suraj121704c",
      icon: <FaGithub fontSize={"1.2rem"} />,
    },
    {
      url: "tel:6387389485",
      icon: <HiPhone fontSize={"1.2rem"} />,
    },
    {
      url: "https://nhb668912@gmail.com",
      icon: <HiOutlineMail fontSize={"1.2rem"} />,
    },
  ];

  return (
    <div className="contact-wrapper" id="Contacts">
      <HeaderSection title={"Contacts"} />
      <div className="content-wrapper">
        <div className="contact-list">
          {contactList.map((ele, i) => (
            <button key={i} className="styled-contact">
              {ele.icon}
              <span>{ele.text}</span>
            </button>
          ))}
        </div>
        <div className="map-section">
          <img className="contact-photo" src={Photo} />
        </div>
      </div>
      <br />
      <div className="social-container">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <br />
      <div className="thank-you-container">
        <img
          src="https://readme-typing-svg.herokuapp.com?font=Architects+Daughter&amp;color=red&amp;size=24&amp;lines=Thanks!+For+Visiting+My+Profile!;See+You+Next-Time+Hope+u+like+it...👨🏻‍💻;"
          alt="Thank You"
          className="thank-you-image"
        />
      </div>
    </div>
  );
}
