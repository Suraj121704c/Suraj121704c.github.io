import React, { useEffect, useRef, useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import HeaderSection from "../Helper/HeaderSection";
import styled from "@emotion/styled";
import Typed from "typed.js";

export default function About() {
  const { colorMode } = useColorMode();
  const typedElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 300);

    // Typed.js animation
    const options = {
      strings: [
        "Mobile App Developer",
        "React Native Expert",
        "Problem Solver",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      clearTimeout(timer);
      typed.destroy();
    };
  }, []);

  return (
    <AboutContainerStyled id="About" colorMode={colorMode}>
      <HeaderSection title={"About"} />

      <div className={`about_content ${isVisible ? "visible" : ""}`}>
        <div className="typed-container">
          <div className="multiple-text" ref={typedElementRef}></div>
        </div>

        <div className="paragraph-container">
          <p className="paragraph-animation">
            <strong className="keyword-highlight">
              A Mobile App Developer with over 3 years of hands-on experience
            </strong>{" "}
            in building user-friendly and scalable mobile applications using{" "}
            <strong className="keyword-highlight">React Native</strong>.
            Proficient in{" "}
            <strong className="keyword-highlight">TypeScript</strong> for
            writing robust and maintainable code. Skilled in{" "}
            <strong className="keyword-highlight">Redux</strong> for state
            management, <strong className="keyword-highlight">Firebase</strong>{" "}
            for backend integration (including authentication, notifications,
            and deep linking), and creating responsive UIs using modern
            libraries. Experienced in handling background operations,
            integrating REST APIs, and working with{" "}
            <strong className="keyword-highlight">sockets</strong> for real-time
            features. Possesses a strong learning mindset and a passion for
            building intuitive, high-performance apps. Combines creativity with
            problem-solving skills, pays close attention to detail, and thrives
            in collaborative, fast-paced team environments. Looking forward to
            joining a progressive organization with opportunities to work on
            challenging projects.
          </p>
          <br />
          <p className="paragraph-animation">
            With a problem-solving mindset and strong collaboration skills, I'm
            continuously improving and excited to keep growing as a competent
            professional in a dynamic tech environment.
          </p>
        </div>
      </div>
    </AboutContainerStyled>
  );
}

const AboutContainerStyled = styled.div`
  .about_content {
    text-align: start;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#75797c")};
    font-size: 1.05rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .typed-container {
    margin-bottom: 2rem;
    min-height: 2.5rem;
    display: flex;
    align-items: center;
  }

  .multiple-text {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f7fafc" : "#2c3e50")};
    text-align: center;
    width: 100%;

    &::after {
      content: "|";
      animation: blink 1s infinite;
    }
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }

  .paragraph-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .paragraph-animation {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInFromLeft 0.8s ease-out forwards;

    &:nth-child(1) {
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }

  @keyframes slideInFromLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .keyword-highlight {
    position: relative;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#63b3ed" : "#3498db")};
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        ${({ colorMode }) => (colorMode === "dark" ? "#63b3ed" : "#3498db")},
        ${({ colorMode }) => (colorMode === "dark" ? "#3182ce" : "#2980b9")}
      );
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ colorMode }) =>
        colorMode === "dark" ? "#3182ce" : "#2980b9"};
      transform: translateY(-1px);

      &::after {
        width: 100%;
      }
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .multiple-text {
      font-size: 1.4rem;
    }

    .about_content {
      font-size: 1rem;
    }
  }
`;
