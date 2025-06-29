import React, { useEffect, useRef, useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import HeaderSection from "../Helper/HeaderSection";
import styled from "@emotion/styled";
import Typed from "typed.js";
import { motion } from "framer-motion";

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
        <div className="content-layout">
          <div className="text-content">
            <div className="typed-container">
              <div className="multiple-text" ref={typedElementRef}></div>
            </div>

            <div className="paragraph-container">
              <p className="paragraph-animation">
                <strong className="keyword-highlight">
                  A Mobile App Developer with over 3 years of hands-on
                  experience
                </strong>{" "}
                in building user-friendly and scalable mobile applications using{" "}
                <strong className="keyword-highlight">React Native</strong>.
                Proficient in{" "}
                <strong className="keyword-highlight">TypeScript</strong> for
                writing robust and maintainable code. Skilled in{" "}
                <strong className="keyword-highlight">Redux</strong> for state
                management,{" "}
                <strong className="keyword-highlight">Firebase</strong> for
                backend integration (including authentication, notifications,
                and deep linking), and creating responsive UIs using modern
                libraries. Experienced in handling background operations,
                integrating REST APIs, and working with{" "}
                <strong className="keyword-highlight">sockets</strong> for
                real-time features. Possesses a strong learning mindset and a
                passion for building intuitive, high-performance apps. Combines
                creativity with problem-solving skills, pays close attention to
                detail, and thrives in collaborative, fast-paced team
                environments. Looking forward to joining a progressive
                organization with opportunities to work on challenging projects.
              </p>
              <br />
              <p className="paragraph-animation">
                With a problem-solving mindset and strong collaboration skills,
                I'm continuously improving and excited to keep growing as a
                competent professional in a dynamic tech environment.
              </p>
            </div>
          </div>
          <motion.div
            className="character-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="character"
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 3, 0],
              }}
              transition={{
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="pc-setup">
                {/* Monitor */}
                <motion.div
                  className="monitor"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="monitor-screen">
                    <div className="terminal-header">
                      <div className="terminal-buttons">
                        <div className="button red"></div>
                        <div className="button yellow"></div>
                        <div className="button green"></div>
                      </div>
                      <div className="terminal-title">Terminal - Developer</div>
                    </div>
                    <div className="terminal-content">
                      <motion.div
                        className="code-scroll"
                        animate={{
                          y: [0, -200, 0],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="code-line">
                          <span className="prompt">$</span> npm install
                          react-native
                        </div>
                        <div className="code-line">
                          <span className="output">
                            added 1234 packages in 2.5s
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npx react-native
                          run-android
                        </div>
                        <div className="code-line">
                          <span className="output">BUILD SUCCESSFUL</span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> git add .
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> git commit -m "Add
                          new feature"
                        </div>
                        <div className="code-line">
                          <span className="output">
                            [main abc1234] Add new feature
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npm start
                        </div>
                        <div className="code-line">
                          <span className="output">Metro bundler ready</span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npx react-native
                          doctor
                        </div>
                        <div className="code-line">
                          <span className="output">✅ All checks passed</span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npm run test
                        </div>
                        <div className="code-line">
                          <span className="output">
                            Tests: 15 passed, 0 failed
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npx react-native
                          run-ios
                        </div>
                        <div className="code-line">
                          <span className="output">
                            Simulator launched successfully
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> git push origin main
                        </div>
                        <div className="code-line">
                          <span className="output">Everything up-to-date</span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npm install
                          @react-navigation/native
                        </div>
                        <div className="code-line">
                          <span className="output">
                            added 567 packages in 1.8s
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npx react-native
                          link
                        </div>
                        <div className="code-line">
                          <span className="output">
                            Linking completed successfully
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npm run build
                        </div>
                        <div className="code-line">
                          <span className="output">
                            Build completed successfully
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npx react-native
                          run-android
                        </div>
                        <div className="code-line">
                          <span className="output">BUILD SUCCESSFUL</span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> git add .
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> git commit -m "Add
                          new feature"
                        </div>
                        <div className="code-line">
                          <span className="output">
                            [main abc1234] Add new feature
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npm start
                        </div>
                        <div className="code-line">
                          <span className="output">Metro bundler ready</span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npx react-native
                          doctor
                        </div>
                        <div className="code-line">
                          <span className="output">✅ All checks passed</span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npm run test
                        </div>
                        <div className="code-line">
                          <span className="output">
                            Tests: 15 passed, 0 failed
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> npx react-native
                          run-ios
                        </div>
                        <div className="code-line">
                          <span className="output">
                            Simulator launched successfully
                          </span>
                        </div>
                        <div className="code-line">
                          <span className="prompt">$</span> git push origin main
                        </div>
                        <div className="code-line">
                          <span className="output">Everything up-to-date</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="monitor-stand"></div>
                </motion.div>

                {/* Desktop Tower */}
                <motion.div
                  className="tower"
                  animate={{
                    y: [0, -1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="tower-body">
                    <div className="power-button"></div>
                    <div className="usb-ports">
                      <div className="usb-port"></div>
                      <div className="usb-port"></div>
                    </div>
                    <div className="led-indicators">
                      <div className="led power"></div>
                      <div className="led hdd"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Keyboard */}
                <motion.div
                  className="keyboard"
                  animate={{
                    y: [0, -1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <div className="keyboard-body">
                    <div className="key-row">
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                    </div>
                    <div className="key-row">
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                    </div>
                    <div className="key-row">
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                      <div className="key"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Mouse */}
                <motion.div
                  className="mouse"
                  animate={{
                    y: [0, -1, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                >
                  <div className="mouse-body"></div>
                </motion.div>

                {/* Floating Code Elements */}
                <motion.div
                  className="code-element element-1"
                  animate={{
                    y: [-25, 25, -25],
                    rotate: [0, 12, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &lt;/&gt;
                </motion.div>
                <motion.div
                  className="code-element element-2"
                  animate={{
                    y: [25, -25, 25],
                    rotate: [0, -12, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  {}
                </motion.div>
                <motion.div
                  className="code-element element-3"
                  animate={{
                    y: [-20, 30, -20],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  ( )
                </motion.div>
                <motion.div
                  className="code-element element-4"
                  animate={{
                    y: [30, -20, 30],
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                >
                  [ ]
                </motion.div>
                <motion.div
                  className="code-element element-5"
                  animate={{
                    y: [-15, 35, -15],
                    rotate: [0, 8, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                  }}
                >
                  {"=>"}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
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

  .content-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .character-container {
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1200px;
    height: 400px;
  }

  .character {
    position: relative;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .pc-setup {
    position: relative;
    width: 250px;
    height: 300px;
    transform-style: preserve-3d;
  }

  .monitor {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transform-style: preserve-3d;
  }

  .monitor-screen {
    width: 160px;
    height: 120px;
    background: #000000;
    border: 4px solid
      ${({ colorMode }) => (colorMode === "dark" ? "#4a5568" : "#e2e8f0")};
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .terminal-header {
    height: 20px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#2d3748" : "#e2e8f0"};
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-bottom: 1px solid #000;
  }

  .terminal-buttons {
    display: flex;
    gap: 4px;
    margin-right: 8px;
  }

  .button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .button.red {
    background: #ff5f56;
  }
  .button.yellow {
    background: #ffbd2e;
  }
  .button.green {
    background: #27ca3f;
  }

  .terminal-title {
    font-size: 8px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#4a5568")};
    font-family: "Courier New", monospace;
  }

  .terminal-content {
    height: 99px;
    overflow: hidden;
    position: relative;
  }

  .code-scroll {
    padding: 8px;
    font-family: "Courier New", monospace;
    font-size: 7px;
    line-height: 1.2;
  }

  .code-line {
    margin-bottom: 2px;
    white-space: nowrap;
  }

  .prompt {
    color: #00ff00;
    font-weight: bold;
    margin-right: 4px;
  }

  .output {
    color: #ffffff;
  }

  .monitor-stand {
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 15px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#4a5568" : "#e2e8f0"};
    border-radius: 0 0 4px 4px;
  }

  .tower {
    position: absolute;
    bottom: 0;
    right: 20px;
    transform-style: preserve-3d;
  }

  .tower-body {
    width: 40px;
    height: 80px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#2d3748" : "#e2e8f0"};
    border: 3px solid
      ${({ colorMode }) => (colorMode === "dark" ? "#4a5568" : "#cbd5e0")};
    border-radius: 4px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .power-button {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #00ff00;
    border-radius: 50%;
    box-shadow: 0 0 4px #00ff00;
  }

  .usb-ports {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .usb-port {
    width: 12px;
    height: 4px;
    background: #000;
    border-radius: 1px;
  }

  .led-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
  }

  .led {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }

  .led.power {
    background: #00ff00;
    box-shadow: 0 0 3px #00ff00;
  }

  .led.hdd {
    background: #ff6b35;
    box-shadow: 0 0 3px #ff6b35;
  }

  .keyboard {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    transform-style: preserve-3d;
  }

  .keyboard-body {
    width: 140px;
    height: 50px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#2d3748" : "#e2e8f0"};
    border: 3px solid
      ${({ colorMode }) => (colorMode === "dark" ? "#4a5568" : "#cbd5e0")};
    border-radius: 6px;
    padding: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .key-row {
    display: flex;
    gap: 2px;
    margin-bottom: 2px;
  }

  .key {
    width: 12px;
    height: 8px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#4a5568" : "#cbd5e0"};
    border-radius: 2px;
    border: 1px solid
      ${({ colorMode }) => (colorMode === "dark" ? "#2d3748" : "#a0aec0")};
  }

  .mouse {
    position: absolute;
    bottom: 20px;
    right: 80px;
    transform-style: preserve-3d;
  }

  .mouse-body {
    width: 25px;
    height: 35px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#2d3748" : "#e2e8f0"};
    border: 2px solid
      ${({ colorMode }) => (colorMode === "dark" ? "#4a5568" : "#cbd5e0")};
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .code-element {
    position: absolute;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#63b3ed" : "#3498db")};
    font-weight: bold;
    font-size: 1.1rem;
    opacity: 0.8;
    pointer-events: none;
    text-shadow: 0 0 8px rgba(99, 179, 237, 0.4);
    font-family: "Courier New", monospace;
  }

  .element-1 {
    top: -40px;
    left: -50px;
  }

  .element-2 {
    top: 50px;
    right: -60px;
  }

  .element-3 {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .element-4 {
    top: 100px;
    left: -40px;
  }

  .element-5 {
    top: 150px;
    right: -30px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
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

  @keyframes blink {
    0%,
    90%,
    100% {
      opacity: 1;
    }
    95% {
      opacity: 0;
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
    .content-layout {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .character-container {
      height: 300px;
    }

    .pc-setup {
      width: 200px;
      height: 250px;
    }

    .monitor-screen {
      width: 120px;
      height: 90px;
    }

    .terminal-content {
      height: 69px;
    }

    .code-scroll {
      font-size: 5px;
      padding: 4px;
    }

    .tower-body {
      width: 30px;
      height: 60px;
    }

    .keyboard-body {
      width: 100px;
      height: 35px;
    }

    .code-element {
      font-size: 0.9rem;
    }

    .multiple-text {
      font-size: 1.4rem;
    }

    .about_content {
      font-size: 1rem;
    }
  }
`;
