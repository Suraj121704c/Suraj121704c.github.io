import styled from "@emotion/styled";
import React from "react";
import { FaGithub, FaUserAstronaut } from "react-icons/fa";
import { RiProjector2Fill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
export default function LinkContainer() {
  return (
    <MainLinkContainer>
      <div className="inner_container">
        {linksIcon.map((ele, i) => (
          <LinkContainerStyled
            background={ele.background}
            title={ele.text}
            key={i}
          >
            <a href={`#${ele.id}`}>{ele.icons}</a>

            {/* <span style={{ fontSize: "0.7rem" }}>{ele.text}</span> */}
          </LinkContainerStyled>
        ))}
      </div>
    </MainLinkContainer>
  );
}

export const linksIcon = [
  {
    icons: <FaUserAstronaut />,
    links: "",
    text: "About",
    background: "#edd3ec",
    id: "About",
  },

  {
    icons: <GiSkills />,
    links: "",
    text: "Skills",
    background: "skyblue",
    id: "Skills",
  },
  {
    icons: <MdWorkHistory />,
    links: "",
    text: "Experience and Education",
    background: "#edd3ec",
    id: "Expe_Edu",
  },

  {
    icons: <RiProjector2Fill />,
    links: "",
    text: "Projects",
    background: "#56a48c",
    id: "Projects",
  },
  {
    icons: <FaGithub />,
    links: "",
    text: "Github",
    background: "#edd3ec",
    id: "Github",
  },
  {
    icons: <MdContactPhone />,
    links: "",
    text: "Contacts",
    background: "#48a3a6",
    id: "Contacts",
  },
];
const MainLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .inner_container {
    padding: 10px;
    width: 80%;
    margin: auto;
  }
`;
export const LinkContainerStyled = styled.div(({ background }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // border: "1px solid green",
  height: "75px",
  margin: "auto",
  fontSize: "1.5rem",
  marginTop: "10px",
  cursor: "pointer",
  background: "#daf7f1",
  transition: "transform 0.7s ease",
  textAlign: "center",
  fontWeight: "bold",
  borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45% ",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow:
      "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
    // background: background || "#daf7f1",
    // color: "white",
  },
}));
