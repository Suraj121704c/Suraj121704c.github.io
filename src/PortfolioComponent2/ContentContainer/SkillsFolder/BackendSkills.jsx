import React from "react";
import SkillsCard from "./SkillsCard";
import styled from "@emotion/styled";

export default function BackendSkills() {
  return (
    <>
      <div style={{ textAlign: "start", fontSize: "1rem" }}>
        <p>Backend Technologies I am familiar with:</p>
      </div>
      <br />
      <BackEndSkillsStyled>
        {backEndArray.map((ele, i) => (
          <SkillsCard imageLink={ele.image} text={ele.text} />
        ))}
      </BackEndSkillsStyled>
    </>
  );
}

const BackEndSkillsStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const backEndArray = [
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255087494-28073997-96d4-48ce-9bb6-c46f9cbe48b9.png",
    text: "Node js",
  },
  {
    image:
      "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    text: "Express js",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086972-9cb90d62-a556-474f-920f-aba5a0e9684d.png",
    text: "Mongo DB",
  },
];
