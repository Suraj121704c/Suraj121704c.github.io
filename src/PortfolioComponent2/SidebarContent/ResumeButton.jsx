import React from "react";
import styled from "@emotion/styled";
import { DownloadIcon } from "@chakra-ui/icons";
import Md_Faizan_resumenew from "../Md_Faizan_resumenew.pdf";
export default function ResumeButton() {
  const handleDownloadResume = () => {
    console.log(Md_Faizan_resumenew);
  };
  return (
    <div>
      <ButtonResume onClick={handleDownloadResume}>
        {/* <a href={Md_Faizan_resumenew} download="Md_Faizan_resumenew.pdf"> */}
        <span>Resume</span>
        {/* </a> */}
        <DownloadIcon />
      </ButtonResume>
    </div>
  );
}

const ButtonResume = styled.div`
  width: 100%;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  border-radius: 6px;
  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  &:hover {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
    transform: scale(1.05);
  }
`;
