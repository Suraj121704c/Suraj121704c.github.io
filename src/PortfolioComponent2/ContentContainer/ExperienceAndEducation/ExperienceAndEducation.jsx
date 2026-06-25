import React from "react";
import { useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MdWorkOutline, MdSchool } from "react-icons/md";
import HeaderSection from "../../Helper/HeaderSection";

const EXPERIENCE = [
  {
    period: "Nov 2024 – Present",
    role: "Mobile App Developer",
    place: "Storewide Active Intelligence",
    location: "Bangalore, India",
    current: true,
  },
  {
    period: "May 2024 – Nov 2024",
    role: "Mobile App Developer",
    place: "Imfacto DigiFin",
    location: "Bangalore, India",
  },
  {
    period: "Jul 2022 – Mar 2024",
    role: "Mobile App Developer",
    place: "Skiivia Innovation",
    location: "Chandigarh, India",
  },
];

const EDUCATION = [
  {
    period: "2024 – Present",
    role: "Master of Computer Application (MCA)",
    place: "Kurukshetra University",
    current: true,
  },
  {
    period: "2021 – 2023",
    role: "Bachelor's Degree",
    place: "Allahabad State University",
  },
];

function Timeline({ items, colorMode }) {
  return (
    <ul className="timeline">
      {items.map((it, i) => (
        <li className="t-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <span className={`dot ${it.current ? "live" : ""}`} />
          <span className="period">
            {it.period}
            {it.current && <em>Now</em>}
          </span>
          <h4 className="role">{it.role}</h4>
          <p className="place">
            {it.place}
            {it.location ? ` · ${it.location}` : ""}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceAndEducation() {
  const { colorMode } = useColorMode();

  return (
    <Wrap id="Expe_Edu" colorMode={colorMode}>
      <HeaderSection title="Experience & Education" />

      <div className="columns">
        <div className="col">
          <div className="col-head">
            <span className="ic">
              <MdWorkOutline />
            </span>
            <h3>Experience</h3>
          </div>
          <Timeline items={EXPERIENCE} colorMode={colorMode} />
        </div>

        <div className="col">
          <div className="col-head">
            <span className="ic">
              <MdSchool />
            </span>
            <h3>Education</h3>
          </div>
          <Timeline items={EDUCATION} colorMode={colorMode} />
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-top: 28px;
  }

  .col-head {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }
  .col-head .ic {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    font-size: 1.3rem;
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.35);
  }
  .col-head h3 {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
  }

  .timeline {
    list-style: none;
    margin: 0;
    padding: 0 0 0 24px;
    position: relative;
  }
  .timeline::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: ${({ colorMode }) =>
      colorMode === "dark"
        ? "linear-gradient(180deg, rgba(139,92,246,0.6), rgba(148,163,184,0.12))"
        : "linear-gradient(180deg, rgba(99,102,241,0.5), rgba(15,23,42,0.06))"};
  }

  .t-item {
    position: relative;
    padding: 0 0 28px 8px;
    text-align: left;
    opacity: 0;
    transform: translateY(14px);
    animation: itemIn 0.6s ease forwards;
  }
  .t-item:last-child {
    padding-bottom: 0;
  }

  @keyframes itemIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dot {
    position: absolute;
    left: -24px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#0b1120" : "#f8fafc"};
    border: 3px solid #8b5cf6;
  }
  .dot.live {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.5);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.5);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(139, 92, 246, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
    }
  }

  .period {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#a5b4fc" : "#6366f1")};
  }
  .period em {
    font-style: normal;
    font-size: 0.66rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 999px;
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
  }

  .role {
    font-size: 1.02rem;
    font-weight: 700;
    margin: 7px 0 3px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f1f5f9" : "#0f172a")};
  }
  .place {
    font-size: 0.9rem;
    margin: 0;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#64748b")};
  }

  @media (max-width: 760px) {
    .columns {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }
`;
