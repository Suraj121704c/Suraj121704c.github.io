import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";
import { linksIcon } from "../LinkContainer";

export default function BottomNav() {
  const { colorMode } = useColorMode();

  return (
    <NavContainer colorMode={colorMode}>
      {linksIcon &&
        linksIcon.map((ele, i) => (
          <LinkContainerDIV
            background={ele.background}
            title={ele.text}
            key={i}
            colorMode={colorMode}
          >
            <a href={`#${ele.id}`}>{ele.icons}</a>
          </LinkContainerDIV>
        ))}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: ${({ colorMode }) =>
    colorMode === "dark" ? "#1a202c" : "white"};
  color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  z-index: 1000;
  border-radius: 20px 20px 0 0;
  transition: all 0.3s ease;

  flex-wrap: wrap;

  @media (max-width: 600px) {
    padding: 10px;
    flex-wrap: wrap;
  }
`;

const LinkContainerDIV = styled.div(({ background, colorMode }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45%",
  background: colorMode === "dark" ? "#2d3748" : "#daf7f1",
  height: "40px",
  width: "40px",
  transition: "background-color 0.3s ease, transform 0.3s ease",

  /* Adjusting size for smaller screens */
  "@media (max-width: 600px)": {
    height: "30px",
    width: "30px",
  },

  "&:hover": {
    background: background || (colorMode === "dark" ? "#4a5568" : "#a0e6d3"),
    transform: "scale(1.1)",
  },

  a: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: colorMode === "dark" ? "white" : "#000",
  },
}));
