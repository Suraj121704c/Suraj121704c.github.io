import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

const SOCIALS = [
  { icon: <BsTwitter />, link: "https://x.com/Suraj121704C" },
  {
    icon: <ImLinkedin />,
    link: "https://www.linkedin.com/in/suraj-singh-22844a257/",
  },
  { icon: <FaGithub />, link: "https://github.com/Suraj121704C" },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/c/PsychoPlayers1?app=desktop",
  },
];

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Bar colorMode={colorMode}>
      <div className="socials">
        {SOCIALS.map((s, i) => (
          <a key={i} href={s.link} target="_blank" rel="noreferrer">
            {s.icon}
          </a>
        ))}
      </div>
      <p>
        Designed &amp; built by <strong>Suraj Singh</strong>
      </p>
    </Bar>
  );
}

const Bar = styled.footer`
  text-align: center;
  padding: 50px 24px 40px;
  margin-top: 40px;
  border-top: 1px solid
    ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.07)"};

  .socials {
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 16px;
  }
  .socials a {
    font-size: 1.2rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#475569")};
    transition: color 0.2s ease, transform 0.2s ease;
  }
  .socials a:hover {
    color: #6366f1;
    transform: translateY(-2px);
  }
  p {
    font-size: 0.88rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#64748b" : "#94a3b8")};
  }
  p strong {
    color: ${({ colorMode }) => (colorMode === "dark" ? "#c7d2fe" : "#4f46e5")};
  }
`;
