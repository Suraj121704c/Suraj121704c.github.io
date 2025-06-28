import styled from "@emotion/styled";
import Ribbon from "antd/es/badge/Ribbon";
import React from "react";

export default function SkillsCard({ imageLink, text }) {
  return (
    <ImageContainerSkill>
      <Ribbon text={text}>
        <div className="imageContainer">
          <img src={imageLink} alt={text} />
        </div>
      </Ribbon>
    </ImageContainerSkill>
  );
}

const ImageContainerSkill = styled.div`
  .imageContainer {
    height: 95px;
    width: 95px;
    padding: 5px;
    /* border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    box-shadow: 10px 10px 40px hsla(0, 0%, 0%, 0.1);
    border-radius: 12px;
    cursor: pointer;
    overflow: hidden;
  }

  .imageContainer img {
    object-fit: cover;
    transition: transform 0.6s ease-in-out;
    border-radius: 10px;
  }
  .imageContainer img:hover {
    transform: scale(1.1);
  }
`;
