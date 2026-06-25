import React from "react";
import { useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import HeaderSection from "../../Helper/HeaderSection";

const SKILLS = [
  { image: "https://reactnative.dev/img/header_logo.svg", text: "React Native" },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086458-7f6be61d-ffe1-4096-af30-2a39e7b3ed6f.png",
    text: "TypeScript",
  },
  { image: "https://redux.js.org/img/redux.svg", text: "Redux" },
  {
    image:
      "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png",
    text: "Firebase",
  },
  { image: "https://jestjs.io/img/opengraph.png", text: "Jest Testing" },
  { image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", text: "REST APIs" },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTyuFXQDDOUPdafq8kkiBQ1Ai-ovU_avXecDIkszkPTeOxZ5R8H8g99xl6vRfQH-w4BA&usqp=CAU",
    text: "Axios",
  },
  { image: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png", text: "Notifications" },
  { image: "https://cdn-icons-png.flaticon.com/512/545/545682.png", text: "Deep Linking" },
  { image: "https://cdn-icons-png.flaticon.com/512/906/906361.png", text: "WebSockets" },
  {
    image:
      "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
    text: "Android Studio",
  },
  {
    image:
      "https://developer.apple.com/assets/elements/icons/xcode/xcode-128x128_2x.png",
    text: "Xcode",
  },
  { image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", text: "Git" },
  {
    image:
      "https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE",
    text: "Stripe",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENijCCe0u8MXMbZ94rZmuSKfN67dgQAdsdg&s",
    text: "Superwall",
  },
  { image: "https://cdn-icons-png.flaticon.com/512/126/126474.png", text: "CodePush" },
  { image: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", text: "Responsive UI" },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255094909-ccb4d46c-a531-42e1-8d6a-300641127a91.png",
    text: "HTML",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255088314-35bd02cd-4771-4156-9409-5f5a4c74155a.png",
    text: "CSS",
  },
  { image: "https://cdn-icons-png.flaticon.com/512/3064/3064155.png", text: "App Security" },
];

export default function Skills() {
  const { colorMode } = useColorMode();

  return (
    <Wrap id="Skills" colorMode={colorMode}>
      <HeaderSection title="Skills" />
      <p className="subtitle">
        Tools and technologies I use to ship production mobile apps.
      </p>

      <div className="grid">
        {SKILLS.map((s) => (
          <div className="skill" key={s.text}>
            <div className="icon">
              <img src={s.image} alt={s.text} loading="lazy" />
            </div>
            <span>{s.text}</span>
          </div>
        ))}
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
    grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
    gap: 14px;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 22px 12px;
    border-radius: 16px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(148,163,184,0.06)" : "rgba(255,255,255,0.7)"};
    border: 1px solid
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(148,163,184,0.12)" : "rgba(15,23,42,0.07)"};
    transition: transform 0.25s ease, border-color 0.25s ease,
      box-shadow 0.25s ease;
  }
  .skill:hover {
    transform: translateY(-5px);
    border-color: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(139,92,246,0.6)" : "rgba(99,102,241,0.5)"};
    box-shadow: 0 14px 30px
      ${({ colorMode }) =>
        colorMode === "dark" ? "rgba(0,0,0,0.4)" : "rgba(99,102,241,0.15)"};
  }

  .icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.03)"};
  }
  .icon img {
    width: 34px;
    height: 34px;
    object-fit: contain;
  }

  .skill span {
    font-size: 0.85rem;
    font-weight: 500;
    text-align: center;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#334155")};
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
      gap: 10px;
    }
    .skill {
      padding: 16px 8px;
    }
  }
`;
