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
`;

const TimelineContainer = styled.div`
  margin-top: 2rem;
`;
