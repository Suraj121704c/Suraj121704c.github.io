import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import SURAJ_SINGH_CV from "../../assets/Suraj_Singh_CV.pdf";

const NAV_LINKS = [
  { label: "About", id: "About" },
  { label: "Skills", id: "Skills" },
  { label: "Experience", id: "Expe_Edu" },
  { label: "Projects", id: "Projects" },
  { label: "GitHub", id: "Github" },
  { label: "Contact", id: "Contacts" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bar colorMode={colorMode} scrolled={scrolled}>
      <div className="inner">
        <a className="logo" href="#Home">
          Suraj<span>.</span>
        </a>

        <nav className={`links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="actions">
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="sm"
            variant="ghost"
            borderRadius="full"
          />
          <a
            className="resume-btn"
            href={SURAJ_SINGH_CV}
            target="_blank"
            rel="noreferrer"
            download="Suraj_Singh_Resume.pdf"
          >
            Resume
          </a>
          <button
            className="burger"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /> <span /> <span />
          </button>
        </div>
      </div>
    </Bar>
  );
}

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${({ scrolled, colorMode }) =>
    scrolled
      ? colorMode === "dark"
        ? "rgba(11,17,32,0.72)"
        : "rgba(248,250,252,0.75)"
      : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(14px)" : "none")};
  border-bottom: 1px solid
    ${({ scrolled, colorMode }) =>
      scrolled
        ? colorMode === "dark"
          ? "rgba(148,163,184,0.12)"
          : "rgba(15,23,42,0.07)"
        : "transparent"};

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
  }
  .logo span {
    color: #6366f1;
  }

  .links {
    display: flex;
    gap: 28px;
  }
  .links a {
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 500;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#475569")};
    transition: color 0.2s ease;
  }
  .links a:hover {
    color: #6366f1;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .resume-btn {
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 10px;
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .resume-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(99, 102, 241, 0.45);
  }

  .burger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
  }
  .burger span {
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#e2e8f0" : "#0f172a"};
  }

  @media (max-width: 820px) {
    .burger {
      display: flex;
    }
    .links {
      position: absolute;
      top: 100%;
      right: 16px;
      flex-direction: column;
      gap: 18px;
      padding: 20px 26px;
      border-radius: 16px;
      background: ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(17,24,39,0.97)" : "rgba(255,255,255,0.97)"};
      border: 1px solid
        ${({ colorMode }) =>
          colorMode === "dark"
            ? "rgba(148,163,184,0.14)"
            : "rgba(15,23,42,0.08)"};
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.25);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      transition: all 0.25s ease;
    }
    .links.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  }
`;
