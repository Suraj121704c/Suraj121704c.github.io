import styled from "@emotion/styled";
import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";

export default function SkillsCard({ imageLink, text }) {
  const { colorMode } = useColorMode();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ImageContainerSkill
      colorMode={colorMode}
      isFlipped={isFlipped}
      onClick={handleCardClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="imageContainer">
            <img src={imageLink} alt={text} />
          </div>
          {text && <div className="labelBelow">{text}</div>}
        </div>
        <div className="card-back">
          <div className="back-content">
            <h3>{text}</h3>
            <p>Click to flip back</p>
          </div>
        </div>
      </div>
    </ImageContainerSkill>
  );
}

const ImageContainerSkill = styled.div`
  perspective: 800px;
  transform-style: preserve-3d;
  margin: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  .card-inner {
    position: relative;
    width: 110px;
    height: 130px;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
    transform: ${({ isFlipped }) =>
      isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#23272f" : "#fff"};
    animation: float3D 4s ease-in-out infinite;
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card-back {
    transform: rotateY(180deg);
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#2d3748" : "#f7fafc"};
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#222")};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .back-content h3 {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .back-content p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .imageContainer {
    height: 70px;
    width: 70px;
    padding: 8px;
    border-radius: 12px;
    background: ${({ colorMode }) =>
      colorMode === "dark" ? "#1a202c" : "#f3f4f6"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .imageContainer img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .labelBelow {
    margin-top: 4px;
    text-align: center;
    font-size: 0.95rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#222")};
    font-weight: 500;
    letter-spacing: 0.01em;
    transition: color 0.3s ease;
  }

  &:hover .card-inner {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
    transform: scale(1.06) rotateY(-8deg) rotateX(4deg);
  }
  &:active .card-inner {
    transform: scale(0.98) rotateY(0deg) rotateX(0deg);
  }

  @keyframes float3D {
    0%,
    100% {
      transform: translateY(0px) rotateX(0deg) rotateY(0deg);
    }
    25% {
      transform: translateY(-6px) rotateX(2deg) rotateY(1deg);
    }
    50% {
      transform: translateY(-3px) rotateX(0deg) rotateY(2deg);
    }
    75% {
      transform: translateY(-8px) rotateX(-1deg) rotateY(0deg);
    }
  }
`;
