import React from "react";
import SkillsCard from "./SkillsCard";
import styled from "@emotion/styled";

export default function Tools() {
  const toolsArray = [
    {
      image: "https://i.ibb.co/QcNgwjb/free-slack-6343405-5221074.webp",
      // image: "../../../../public/free-slack-6343405-5221074.webp",
      text: "Slack",
    },
    {
      image:
        "https://s3.eu-west-1.amazonaws.com/niice-cms/2021/03/02/603ec20dc80e6codesandbox-1.png",
      text: "CodeSendBox",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXwml8Gl-KhfVZql8QnvWvlXjXUtg09q7rA&s",
      text: "Discord",
    },
    {
      image:
        "https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--twitter-logo-social-media-pack-logos-icons-7516837.png",
      text: "GitHub",
    },
    {
      image:
        "https://cdn3d.iconscout.com/3d/free/thumb/free-visual-studio-code-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-python-java-c-coding-lang-pack-logos-icons-7578027.png?f=webp",
      text: "VS Code",
    },
    {
      image:
        "https://cdn3d.iconscout.com/3d/free/thumb/free-notion-3d-icon-download-in-png-blend-fbx-gltf-file-formats--concept-business-management-task-logos-and-brands-pack-icons-9325315.png?f=webp",
      text: "Notion",
    },
    {
      image:
        "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
      text: "Postman",
    },
    {
      image:
        "https://backend.aionlinecourse.com/uploads/ai_software/image/2023/10/replit.png",
      text: "Replit",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2111/2111351.png",
      text: "Codepen",
    },
    {
      image:
        "https://styles.redditmedia.com/t5_58lh3d/styles/communityIcon_lck50fpdcmv71.jpeg?format=pjpg&s=6947d1335568946971cd85b7241fc3ddc6ad70db",
      text: "Vercel",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeE8ba04tH5NUP7_7Y_YYip9PqgN_tmIOTObqIAxHz4vlJpYnLRKhlnUdUtq9XTxeAXaY&usqp=CAU",
      text: "Render",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3pvYrWO2O76gjS8WQFkaVAsw1rye77p_lEr2n5hBy63cv8rs7ZWs-YkFmEOt8W60zy8&usqp=CAU",
      text: "Netlify",
    },
    {
      image: "https://avatars.githubusercontent.com/u/77067997?s=200&v=4",
      text: "Cyclic",
    },
  ];
  return (
    <>
      <div style={{ textAlign: "start", fontSize: "1rem" }}>
        <p>Tools I am familiar with:</p>
      </div>
      <br />
      <ToolsUsedStyled>
        {toolsArray.map((ele, i) => (
          <SkillsCard imageLink={ele.image} text={ele.text} />
        ))}
      </ToolsUsedStyled>
    </>
  );
}

const ToolsUsedStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
