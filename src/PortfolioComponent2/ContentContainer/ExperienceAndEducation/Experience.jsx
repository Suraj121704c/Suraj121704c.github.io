import React from "react";
import EducationTimelineCard from "./EducationTimelineCard";
import styled from "@emotion/styled";

export default function Experience() {
  const experiencearr = [
    {
      date: "May 2024 – Oct 2024",
      courseName: "Mobile App Developer",
      instituteName: "Imfacto DigiFin | Bangalore, India",
      color: "#FF6B6B",
    },
    {
      date: "Jul 2022 – Mar 2024",
      courseName: "Mobile App Developer",
      instituteName: "Skiivia Innovation | Chandigarh, India",
      color: "#4ECDC4",
    },
  ];

  return (
    <ExperienceContainerStyled>
      <EducationTimelineCard data={experiencearr} />
    </ExperienceContainerStyled>
  );
}

const ExperienceContainerStyled = styled.div`
  text-align: start;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
