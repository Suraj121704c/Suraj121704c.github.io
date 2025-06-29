import React from "react";
import { useColorMode } from "@chakra-ui/react";
import HeaderSection from "../../Helper/HeaderSection";
import styled from "@emotion/styled";
import EducationTimelineCard from "./EducationTimelineCard";

export default function ExperienceAndEducation() {
  const { colorMode } = useColorMode();

  // Combined timeline data
  const timelineData = [
    {
      type: "Experience",
      date: "May 2024 – Oct 2024",
      title: "Imfacto DigiFin | Bangalore, India",
      subtitle: "Mobile App Developer",
      color: "#FF6B6B",
    },
    {
      type: "Experience",
      date: "Jul 2022 – Mar 2024",
      title: "Skiivia Innovation | Chandigarh, India",
      subtitle: "Mobile App Developer",
      color: "#4ECDC4",
    },
    {
      type: "Education",
      date: "2024 – present",
      title: "Kurushetra University",
      subtitle: "Masters of Computer Application (MCA)",
      color: "#41516C",
    },
    {
      type: "Education",
      date: "2021 – 2023",
      title: "Allahabad State University",
      subtitle: "Bachelors",
      color: "#f94449",
    },
  ];

  return (
    <EducationExperienceStyled id="Expe_Edu" colorMode={colorMode}>
      <HeaderSection title="Experience & Education" />
      <TimelineContainer>
        <EducationTimelineCard data={timelineData} combined />
      </TimelineContainer>
    </EducationExperienceStyled>
  );
}

const EducationExperienceStyled = styled.div`
  margin-top: 10px;
  color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
  transition: color 0.3s ease;
  animation: fadeIn 0.6s ease-out;
  perspective: 1000px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px) rotateX(10deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotateX(0deg);
    }
    50% {
      transform: translateY(-10px) rotateX(2deg);
    }
  }

  @keyframes glow {
    0%,
    100% {
      box-shadow: 0 0 20px rgba(78, 205, 196, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(78, 205, 196, 0.6);
    }
  }
`;

const TimelineContainer = styled.div`
  margin-top: 2rem;
  transform-style: preserve-3d;
  animation: float 6s ease-in-out infinite;

  &:hover {
    animation-play-state: paused;
  }

  /* Add 3D depth to timeline cards */
  & > * {
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: translateZ(20px) rotateY(5deg) scale(1.02);
      animation: glow 2s ease-in-out infinite;
    }
  }

  /* Stagger animation for timeline items */
  & > *:nth-child(1) {
    animation-delay: 0s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.6s;
  }
`;
