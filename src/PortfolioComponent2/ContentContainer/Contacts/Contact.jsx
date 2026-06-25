import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

import HeaderSection from "../../Helper/HeaderSection";

const CONTACT_CARDS = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "nhb668912@gmail.com",
    href: "mailto:nhb668912@gmail.com",
  },
  {
    icon: <MdWhatsapp />,
    label: "WhatsApp / Phone",
    value: "+91 63873 89485",
    href: "https://wa.me/916387389485",
  },
  {
    icon: <MdLocationOn />,
    label: "Location",
    value: "Bangalore, India",
    href: "https://www.google.com/maps/place/Bengaluru",
  },
];

const SOCIALS = [
  {
    icon: <ImLinkedin />,
    href: "https://www.linkedin.com/in/suraj-singh-22844a257/",
  },
  { icon: <FaGithub />, href: "https://github.com/Suraj121704C" },
  { icon: <BsTwitter />, href: "https://x.com/Suraj121704C" },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/c/PsychoPlayers1?app=desktop",
  },
];

export default function Contact() {
  const { colorMode } = useColorMode();

  return (
    <Wrap id="Contacts" colorMode={colorMode}>
      <HeaderSection title="Contact" />

      <div className="panel">
        <div className="lead">
          <h3>Let's build something great together.</h3>
          <p>
            Have a project in mind, a role to fill, or just want to say hi? My
            inbox is always open — I'll do my best to get back to you.
          </p>

          <div className="cta">
            <a className="primary" href="mailto:nhb668912@gmail.com">
              Say hello <HiArrowUpRight />
            </a>
            <a
              className="ghost"
              href="https://wa.me/916387389485"
              target="_blank"
              rel="noreferrer"
            >
              <MdWhatsapp /> WhatsApp
            </a>
          </div>

          <div className="socials">
            {SOCIALS.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="cards">
          {CONTACT_CARDS.map((c, i) => (
            <a
              className="card"
              key={i}
              href={c.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="ic">{c.icon}</span>
              <span className="meta">
                <span className="label">{c.label}</span>
                <span className="value">{c.value}</span>
              </span>
              <HiArrowUpRight className="arrow" />
            </a>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .panel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 44px;
    align-items: center;
    margin-top: 28px;
    text-align: left;
  }

  .lead h3 {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0 0 14px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
  }
  .lead p {
    font-size: 1rem;
    line-height: 1.7;
    margin: 0 0 26px;
    max-width: 26rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#475569")};
  }

  .cta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 28px;
  }
  .cta a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 12px 22px;
    border-radius: 12px;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .cta .primary {
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    box-shadow: 0 8px 22px rgba(99, 102, 241, 0.35);
  }
  .cta .primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(99, 102, 241, 0.45);
  }
  .cta .ghost {
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#0f172a")};
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.25)" : "rgba(15,23,42,0.15)"};
  }
  .cta .ghost:hover {
    transform: translateY(-3px);
    border-color: #6366f1;
    color: #6366f1;
  }

  .socials {
    display: flex;
    gap: 14px;
  }
  .socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    font-size: 1.15rem;
    border-radius: 12px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#475569")};
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(148,163,184,0.08)" : "rgba(15,23,42,0.04)"};
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.06)"};
    transition: all 0.25s ease;
  }
  .socials a:hover {
    transform: translateY(-3px);
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-color: transparent;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 20px;
    border-radius: 16px;
    text-decoration: none;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(30,41,59,0.55)" : "rgba(255,255,255,0.85)"};
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.07)"};
    box-shadow: ${({ colorMode }) =>
      colorMode === "dark"
        ? "0 6px 18px rgba(0,0,0,0.3)"
        : "0 6px 18px rgba(15,23,42,0.05)"};
    transition: transform 0.25s ease, border-color 0.25s ease,
      box-shadow 0.25s ease;
  }
  .card:hover {
    transform: translateY(-4px);
    border-color: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(139,92,246,0.5)" : "rgba(99,102,241,0.45)"};
    box-shadow: ${({ colorMode }) =>
      colorMode === "dark"
        ? "0 16px 34px rgba(0,0,0,0.45)"
        : "0 16px 34px rgba(99,102,241,0.16)"};
  }
  .card .ic {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 14px;
    font-size: 1.4rem;
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
  }
  .card .meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .card .label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#64748b" : "#94a3b8")};
  }
  .card .value {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f1f5f9" : "#0f172a")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card .arrow {
    margin-left: auto;
    font-size: 1.1rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#64748b" : "#cbd5e1")};
    transition: transform 0.25s ease, color 0.25s ease;
  }
  .card:hover .arrow {
    color: #6366f1;
    transform: translate(3px, -3px);
  }

  @media (max-width: 820px) {
    .panel {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }
`;
