import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";
import Typed from "typed.js";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { Suraj_Singh } from "../../utils/images.js";

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

export default function Hero() {
  const { colorMode } = useColorMode();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Mobile App Developer",
        "React Native Expert",
        "Problem Solver",
      ],
      typeSpeed: 70,
      backSpeed: 45,
      backDelay: 1800,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <Section id="Home" colorMode={colorMode}>
      <div className="hero-inner">
        <div className="hero-text">
          <span className="eyebrow">👋 Hi, I'm</span>
          <h1 className="name">Suraj Singh</h1>
          <h2 className="role">
            <span ref={typedRef} />
          </h2>
          <p className="tagline">
            I build user-friendly, scalable mobile apps with React Native &amp;
            TypeScript — 4+ years turning ideas into polished products on
            Android and iOS.
          </p>

          <div className="cta">
            <a className="primary" href="#Projects">
              View my work
            </a>
            <a className="ghost" href="#Contacts">
              Get in touch
            </a>
          </div>

          <div className="socials">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                aria-label="social link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-avatar">
          <div className="glow" />
          <img src={Suraj_Singh} alt="Suraj Singh" />
        </div>
      </div>

      <a className="scroll-hint" href="#About">
        <span>Scroll</span>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </a>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 120px 24px 80px;
  max-width: 1100px;
  margin: 0 auto;

  .hero-inner {
    display: grid;
    grid-template-columns: 1.3fr 0.9fr;
    gap: 48px;
    align-items: center;
    width: 100%;
  }

  .hero-text {
    text-align: left;
  }

  .eyebrow {
    display: inline-block;
    font-size: 0.95rem;
    font-weight: 600;
    color: #6366f1;
    margin-bottom: 14px;
  }

  .name {
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 6vw, 4.2rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin: 0 0 10px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
  }

  .role {
    font-family: var(--font-display);
    font-size: clamp(1.3rem, 3vw, 2rem);
    font-weight: 600;
    margin: 0 0 22px;
    min-height: 2.4rem;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tagline {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 30rem;
    margin: 0 0 32px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#475569")};
  }

  .cta {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .cta a {
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 13px 26px;
    border-radius: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
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
    gap: 16px;
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

  .hero-avatar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-avatar img {
    width: 300px;
    height: 360px;
    object-fit: cover;
    border-radius: 28px;
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.18)" : "rgba(15,23,42,0.08)"};
    box-shadow: 0 30px 60px rgba(99, 102, 241, 0.25);
    position: relative;
    z-index: 2;
  }
  .hero-avatar .glow {
    position: absolute;
    inset: -10% -10% -10% -10%;
    background: radial-gradient(
      circle at 50% 40%,
      rgba(139, 92, 246, 0.35),
      transparent 60%
    );
    filter: blur(30px);
    z-index: 1;
  }

  .scroll-hint {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#64748b" : "#94a3b8")};
  }
  .scroll-hint .mouse {
    width: 22px;
    height: 36px;
    border-radius: 12px;
    border: 2px solid currentColor;
    display: flex;
    justify-content: center;
    padding-top: 6px;
  }
  .scroll-hint .wheel {
    width: 3px;
    height: 7px;
    border-radius: 3px;
    background: currentColor;
    animation: scrollWheel 1.5s infinite;
  }
  @keyframes scrollWheel {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(8px);
    }
  }

  @media (max-width: 820px) {
    .hero-inner {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .hero-text {
      text-align: center;
    }
    .tagline {
      margin-left: auto;
      margin-right: auto;
    }
    .cta,
    .socials {
      justify-content: center;
    }
    .hero-avatar {
      order: -1;
      margin-bottom: 24px;
    }
    .hero-avatar img {
      width: 220px;
      height: 260px;
    }
    .scroll-hint {
      display: none;
    }
  }
`;
