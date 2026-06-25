import styled from "@emotion/styled";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

export default function HeaderSection({ title }) {
  const { colorMode } = useColorMode();

  return (
    <HeaderDivStyled colorMode={colorMode}>
      <div className="title_container">
        <h1 className="header_title">{title}</h1>
        <div className="header_line"></div>
      </div>
    </HeaderDivStyled>
  );
}

const HeaderDivStyled = styled.div`
  padding: 0.5em 0;
  text-align: start;
  .title_container {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
  .header_title {
    font-family: var(--font-display);
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    white-space: nowrap;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
    transition: color 0.3s ease;
  }
  .header_line {
    flex: 1;
    height: 1px;
    background: ${({ colorMode }) =>
      colorMode === "dark"
        ? "linear-gradient(90deg, rgba(139,92,246,0.5), rgba(148,163,184,0.05))"
        : "linear-gradient(90deg, rgba(99,102,241,0.45), rgba(15,23,42,0.04))"};
    transition: background 0.3s ease;
  }
`;
