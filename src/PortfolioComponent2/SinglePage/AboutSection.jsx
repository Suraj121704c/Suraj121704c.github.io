import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";
import HeaderSection from "../Helper/HeaderSection";

const FACTS = [
  { label: "Experience", value: "4+ years" },
  { label: "Apps shipped", value: "Android & iOS" },
  { label: "Core stack", value: "React Native" },
  { label: "Based in", value: "Bangalore, India" },
];

export default function AboutSection() {
  const { colorMode } = useColorMode();

  return (
    <Wrap id="About" colorMode={colorMode}>
      <HeaderSection title="About" />
      <div className="grid">
        <div className="copy">
          <p>
            A <strong>Mobile App Developer</strong> with over{" "}
            <strong>4 years</strong> of hands-on experience building
            user-friendly and scalable mobile applications using{" "}
            <strong>React Native</strong>. Proficient in{" "}
            <strong>TypeScript</strong> for robust, maintainable code, skilled
            in <strong>Redux</strong> for state management and{" "}
            <strong>Firebase</strong> for backend integration — authentication,
            notifications and deep linking.
          </p>
          <p>
            Experienced in handling background operations, integrating REST
            APIs, and working with <strong>sockets</strong> for real-time
            features. I combine creativity with problem-solving, pay close
            attention to detail, and thrive in collaborative, fast-paced teams —
            always excited to keep growing as a developer.
          </p>
        </div>

        <div className="facts">
          {FACTS.map((f) => (
            <div className="fact" key={f.label}>
              <span className="value">{f.value}</span>
              <span className="label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.section`
  scroll-margin-top: 90px;

  .grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 40px;
    align-items: center;
    margin-top: 24px;
  }

  .copy p {
    text-align: left;
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0 0 18px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#475569")};
  }
  .copy strong {
    color: ${({ colorMode }) => (colorMode === "dark" ? "#c7d2fe" : "#4f46e5")};
    font-weight: 600;
  }

  .facts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .fact {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 20px;
    border-radius: 16px;
    text-align: left;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(148,163,184,0.06)" : "rgba(15,23,42,0.03)"};
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.06)"};
    transition: transform 0.25s ease, border-color 0.25s ease;
  }
  .fact:hover {
    transform: translateY(-4px);
    border-color: #6366f1;
  }
  .fact .value {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 700;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
  }
  .fact .label {
    font-size: 0.82rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#64748b" : "#94a3b8")};
  }

  @media (max-width: 820px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
