import styled from "@emotion/styled";
import React from "react";
import { useColorMode } from "@chakra-ui/react";
import HeaderSection from "../../Helper/HeaderSection";

const main_projects = [
  {
    title: "Qwik — Loan for All",
    tag: "FinTech · Under development",
    description:
      "Student-loan platform for U.S. university students with low or limited credit scores. Features robust KYC verification, real-time location tracking, credit-score checks, expense management, virtual & physical credit cards, and QR-based transactions.",
    techStack: [
      "React Native",
      "Redux Toolkit",
      "Jest",
      "QR Code",
      "Payment Gateway",
      "Push Notifications",
      "Deep Linking",
    ],
    liveURL:
      "https://drive.google.com/file/d/1C5Dm3oFQTE1CQiolUQkh2JA_S_UXxsTK/view",
  },
  {
    title: "AnalysisGPT — AI Data Analysis",
    tag: "AI · Under development",
    description:
      "AI-powered app to explore data through natural-language conversation. Connect databases or upload spreadsheets, then ask questions in plain English and get instant, Markdown-formatted insights organised into chat threads. SSO via AWS Cognito, FCM notifications, localization and OTA updates.",
    techStack: [
      "React Native",
      "New Architecture",
      "Redux Toolkit",
      "AWS Cognito",
      "FCM",
      "OTA Updates",
    ],
    liveURL: "",
  },
  {
    title: "MyWeels — Pick & Drop",
    tag: "Mobility",
    description:
      "A pick-and-drop mobility platform connecting passengers with nearby drivers for safe, reliable rides — with real-time location tracking for quick pickups and smooth trips, just like Ola or Uber.",
    techStack: [
      "React Native",
      "Redux Toolkit",
      "Jest",
      "Real-time Location",
      "Payments",
      "Push Notifications",
    ],
    liveURL: "https://apps.apple.com/in/app/myweels-driver/id6480179296",
  },
  {
    title: "Couple Bible",
    tag: "Lifestyle",
    description:
      "A spiritual connection and learning platform that blends biblical guidance with modern technology — daily inspiration, deep study, and tools for couples to grow in faith together.",
    techStack: [
      "React Native",
      "Redux Toolkit",
      "Supabase",
      "Apple Login",
      "Push Notifications",
      "Deep Linking",
    ],
    liveURL: "https://apps.apple.com/in/app/couple-bible/id6744287078",
  },
  {
    title: "SAI Alerts — Store Management",
    tag: "Retail · Machine Vision",
    description:
      "Theft-prevention and store-operations app. Auto-generates bills while shopping, sends real-time alerts on attempted theft, and supports crowd management by detecting queues via in-store camera feeds.",
    techStack: [
      "React Native",
      "Redux Toolkit",
      "Web Sockets",
      "Real-time Alerts",
      "Deep Linking",
      "Push Notifications",
    ],
    liveURL: "https://apps.apple.com/in/app/sai-alerts/id1582185206",
  },
  {
    title: "DigiApp — Payment Gateway",
    tag: "FinTech · Trinidad & Tobago",
    description:
      "Payment gateway app for a Trinidad & Tobago bank, built on React Native 0.73. Auth flow with notification deep linking, QR generation & scanning for sub-10-second payments, multipart document uploads for loan creation, and in-app PDF viewing. Unit-tested with Jest.",
    techStack: [
      "React Native 0.73",
      "Redux Toolkit",
      "Jest",
      "QR Code",
      "Payment Gateway",
      "PDF Viewer",
    ],
    liveURL:
      "https://apps.apple.com/in/app/tech-u-e-services-mobile-app/id6476198113",
  },
  {
    title: "IAF eReading — Air Force Info",
    tag: "Information",
    description:
      "A comprehensive, fully responsive repository for Indian Air Force information across Android, iOS and tablets — covering war history and details of organised events within the force.",
    techStack: [
      "React Native",
      "Redux Toolkit",
      "Cross-platform",
      "Event Management",
      "Push Notifications",
    ],
    liveURL:
      "https://play.google.com/store/apps/details?id=com.refread.iafereading&hl=en",
  },
];

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <Wrap id="Projects" colorMode={colorMode}>
      <HeaderSection title="Projects" />
      <p className="subtitle">
        A selection of mobile apps I've designed, built and shipped to
        production.
      </p>

      <div className="grid">
        {main_projects.map((p) => {
          const shown = p.techStack.slice(0, 5);
          const extra = p.techStack.length - shown.length;
          return (
            <article className="card" key={p.title}>
              <span className="bar" />
              <div className="card-body">
                <span className="kicker">{p.tag}</span>
                <h3 className="title">{p.title}</h3>
                <p className="desc">{p.description}</p>

                <div className="tags">
                  {shown.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                  {extra > 0 && <span className="tag more">+{extra}</span>}
                </div>
              </div>

              <div className="card-foot">
                {p.liveURL ? (
                  <a
                    className="live"
                    href={p.liveURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View live →
                  </a>
                ) : (
                  <span className="wip">● In progress</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .subtitle {
    text-align: left;
    margin: 14px 0 26px;
    font-size: 1rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#64748b")};
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 22px;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(30,41,59,0.55)" : "rgba(255,255,255,0.85)"};
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.07)"};
    box-shadow: ${({ colorMode }) =>
      colorMode === "dark"
        ? "0 6px 18px rgba(0,0,0,0.35)"
        : "0 6px 18px rgba(15,23,42,0.05)"};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: translateY(-6px);
    border-color: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(139,92,246,0.5)" : "rgba(99,102,241,0.45)"};
    box-shadow: ${({ colorMode }) =>
      colorMode === "dark"
        ? "0 22px 45px rgba(0,0,0,0.5)"
        : "0 22px 45px rgba(99,102,241,0.18)"};
  }

  .bar {
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
  }

  .card-body {
    padding: 22px 22px 8px;
    flex: 1;
    text-align: left;
  }

  .kicker {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#a5b4fc" : "#6366f1")};
    margin-bottom: 8px;
  }

  .title {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0 0 10px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#f8fafc" : "#0f172a")};
  }

  .desc {
    font-size: 0.92rem;
    line-height: 1.65;
    margin: 0 0 16px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#94a3b8" : "#475569")};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .tag {
    font-size: 0.72rem;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 999px;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#cbd5e1" : "#475569")};
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(148,163,184,0.1)" : "rgba(15,23,42,0.05)"};
  }
  .tag.more {
    color: ${({ colorMode }) => (colorMode === "dark" ? "#a5b4fc" : "#6366f1")};
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(99,102,241,0.18)" : "rgba(99,102,241,0.1)"};
  }

  .card-foot {
    padding: 14px 22px 20px;
    display: flex;
    align-items: center;
  }
  .live {
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#a5b4fc" : "#6366f1")};
    transition: gap 0.2s ease, color 0.2s ease;
  }
  .live:hover {
    color: ${({ colorMode }) => (colorMode === "dark" ? "#c7d2fe" : "#4f46e5")};
    letter-spacing: 0.01em;
  }
  .wip {
    font-size: 0.82rem;
    font-weight: 500;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#64748b" : "#94a3b8")};
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
