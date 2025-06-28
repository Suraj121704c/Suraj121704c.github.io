import React from "react";
import styled from "@emotion/styled";
import EducationTimelineCard from "./EducationTimelineCard";

export default function Education() {
  const EducationArr = [
    {
      date: "August 2023 - Present",
      courseName: "BCA",
      instituteName: "Binod Bihari Mahto Koyalanchal University",
      color: "#41516C",
    },
    {
      date: "August 2022 - July 2023",
      courseName: "Full Stack Web Developement",
      instituteName: "Masai School Banglore",
      color: "#f94449",
    },
    {
      date: "June 2020 - July 2022",
      courseName: "Intermediate (12th)",
      instituteName: "High School Gomia",
      color: "#3a90dc",
    },
    {
      date: "April 2010 - May 2020",
      courseName: "Matriculation (10th)",
      instituteName: "Loyola School Gomia",
      color: "#4CADAD",
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
`;
