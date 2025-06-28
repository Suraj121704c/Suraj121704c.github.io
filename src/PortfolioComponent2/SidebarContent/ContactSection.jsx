import styled from "@emotion/styled";
import React from "react";
export default function ContactSection(data) {
  const { link, icon, color, heading, contact } = data.data;
  const handleRedirect = () => {
    window.location.href = `${link}`;
  };

  return (
    <>
      <ContactContainer>
        <IconContainer color={color} onClick={handleRedirect}>
          {icon}
        </IconContainer>
        {/* <Divider type="vertical" style={{ height: "30px" }} /> */}
        <div className="contact_details">
          <div className="contact1">{heading}</div>
          <div className="contact2">{contact}</div>
        </div>
      </ContactContainer>
    </>
  );
}

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
  transition: "transform 0.7s ease-in-out";
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    transform: scale(1);
  }

  .contact_details {
    width: 78%;
    text-align: left;
  }

  .contact1 {
    font-size: 0.9rem;
    color: grey;
  }
`;

const IconContainer = styled.div(({ color }) => ({
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.6rem",
  backgroundColor: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
  borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45% ",
  //   borderRadius: "4px",
  height: "50px",
  cursor: "pointer",
  color: color || "black",
  transition:
    "background-color 0.5s ease-in-out, color 0.5s ease-in-out, transform 0.5s ease-in-out",

  "&:hover": {
    backgroundColor: color || "",
    color: "white",
    transform: "scale(1.07)",
  },
}));
