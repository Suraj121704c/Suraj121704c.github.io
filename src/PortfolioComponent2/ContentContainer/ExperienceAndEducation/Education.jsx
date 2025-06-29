import React from "react";
import styled from "@emotion/styled";
import EducationTimelineCard from "./EducationTimelineCard";

export default function Education() {
  const EducationArr = [
    {
      date: "2024 – present",
      courseName: "Masters of Computer Application (MCA)",
      instituteName: "Kurushetra University",
      color: "#41516C",
    },
    {
      date: "2021 – 2023",
      courseName: "Bachelors",
      instituteName: "Allahabad State University",
      color: "#f94449",
    },
  ];
  return (
    <EducationExperienceStyled>
      <EducationTimelineCard data={EducationArr} />
    </EducationExperienceStyled>
  );
}

const EducationExperienceStyled = styled.div`
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
