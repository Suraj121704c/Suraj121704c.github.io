import React from "react";
import EducationTimelineCard from "./EducationTimelineCard";
import styled from "@emotion/styled";

export default function Experience() {
  const experiencearr = [
    {
      date: "April 2024 - Present",
      courseName: "Software Developer",
      instituteName: "Finalyca Pvt Ltd",
      color: "orange",
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
`;
