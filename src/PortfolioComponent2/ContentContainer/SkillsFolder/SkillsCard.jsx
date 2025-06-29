import styled from "@emotion/styled";
import Ribbon from "antd/es/badge/Ribbon";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

export default function SkillsCard({ imageLink, text }) {
  const { colorMode } = useColorMode();

  return (
    <ImageContainerSkill colorMode={colorMode}>
      <div className="imageContainer">
        <img src={imageLink} alt={text} />
      </div>
      {text && <div className="labelBelow">{text}</div>}
    </ImageContainerSkill>
  );
}

const ImageContainerSkill = styled.div`
  animation: fadeIn 0.8s ease;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .imageContainer {
    height: 95px;
    width: 95px;
    padding: 5px;
    /* border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    box-shadow: ${({ colorMode }) =>
      colorMode === "dark"
        ? "10px 10px 40px hsla(0, 0%, 100%, 0.1)"
        : "10px 10px 40px hsla(0, 0%, 0%, 0.1)"};
    border-radius: 12px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? "#2d3748" : "white"};
    transition: all 0.3s ease;
  }

  .imageContainer img {
    object-fit: cover;
    transition: transform 0.6s ease-in-out;
    border-radius: 10px;
  }
  .imageContainer img:hover {
    transform: scale(1.1);
  }
  .labelBelow {
    margin-top: 8px;
    text-align: center;
    font-size: 0.95rem;
    color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "#222")};
    font-weight: 500;
    letter-spacing: 0.01em;
    transition: color 0.3s ease;
  }
`;
