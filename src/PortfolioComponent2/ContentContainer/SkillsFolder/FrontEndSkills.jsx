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
        "https://user-images.githubusercontent.com/106812942/255093713-fc4acefd-5ae5-469a-ac28-75fff76f758a.png",
      text: "React js",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/278868564-8627170b-5eb9-4d18-84e8-4d7096bb4079.png",
      text: "Angular",
    },
    {
      image:
        "https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png",
      text: "Chakra UI",
    },
    {
      image:
        "https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-dl3neb73.png",
      text: "Ant Design",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255088544-e2550044-1df8-440b-baf1-6dca2ba9165e.png",
      text: "Tailwind CSS",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTyuFXQDDOUPdafq8kkiBQ1Ai-ovU_avXecDIkszkPTeOxZ5R8H8g99xl6vRfQH-w4BA&usqp=CAU",
      text: "Axios",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLq7oAaEf0OSnwEjISs6UZbZBkbkwIUV7Rw&usqp=CAU",
      text: "React Router",
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
