import styled from "@emotion/styled";
import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { FaGithub, FaUserAstronaut } from "react-icons/fa";
import { RiProjector2Fill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";

export default function LinkContainer() {
  const { colorMode } = useColorMode();

  return (
    <MainLinkContainer>
      <div className="inner_container">
        {linksIcon.map((ele, i) => (
          <LinkContainerStyled
            background={ele.background}
            title={ele.text}
            key={i}
            colorMode={colorMode}
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
export const LinkContainerStyled = styled.div(({ colorMode }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "54px",
  width: "54px",
  margin: "14px auto",
  fontSize: "1.3rem",
  cursor: "pointer",
  background:
    colorMode === "dark" ? "rgba(148,163,184,0.08)" : "rgba(15,23,42,0.04)",
  color: colorMode === "dark" ? "#cbd5e1" : "#475569",
  border: `1px solid ${
    colorMode === "dark" ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.06)"
  }`,
  transition: "all 0.25s ease",
  textAlign: "center",
  borderRadius: "16px",
  "& a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "inherit",
  },
  "&:hover": {
    transform: "translateY(-3px)",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    borderColor: "transparent",
    color: "#ffffff",
    boxShadow: "0 8px 20px rgba(99,102,241,0.4)",
  },
}));
