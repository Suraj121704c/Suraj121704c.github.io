import React from "react";
import styled from "@emotion/styled";
import SkillsCard from "./SkillsCard";

export default function FrontEndSkills() {
  const frontEndArray = [
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
    {
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      text: "GIT Control",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255094159-1381596d-06ae-422b-9321-94903c9c6cb3.png",
      text: "JavaScript",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255086458-7f6be61d-ffe1-4096-af30-2a39e7b3ed6f.png",
      text: "TypeScript",
    },
    {
      image:
        "https://cdn.iconscout.com/icon/free/png-256/bitbucket-3521422-2945027.png",
      text: "Bitbucket",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      text: "Rest Apis",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      text: "Responsive UI",
    },
    { image: "https://jestjs.io/img/opengraph.png", text: "Jest Testing" },
    {
      image:
        "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png",
      text: "Firebase",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255093713-fc4acefd-5ae5-469a-ac28-75fff76f758a.png",
      text: "React JS",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      text: "Next JS",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      text: "Unit Testing",
    },
    { image: "https://vuejs.org/images/logo.png", text: "Vue JS" },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255088544-e2550044-1df8-440b-baf1-6dca2ba9165e.png",
      text: "Tailwind Css",
    },
  ];
  return (
    <>
      <div style={{ textAlign: "start", fontSize: "1rem" }}>
        <p>FrontEnd Technologies I am familiar with:</p>
      </div>
      <br />

      <FrontEndSkillsStyled>
        {frontEndArray.map((ele, i) => (
          <SkillsCard imageLink={ele.image} text={ele.text} />
        ))}
      </FrontEndSkillsStyled>
    </>
  );
}

const FrontEndSkillsStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
