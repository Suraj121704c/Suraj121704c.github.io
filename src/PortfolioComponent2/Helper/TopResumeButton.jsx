import { DownloadIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import React from "react";
import MdFaizan_Resume from "../../MdFaizan_resume.pdf";
export default function TopResumeButton() {
  return (
    <ResumeContainerDiv>
      <StyledButton
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/17ti5ypZ77muuZC6yulNyPwNkgbKfpEM2/view?usp=drive_link",
            "_blank"
          );
        }}
      >
        <a
          id="resume-link-1"
          href={MdFaizan_Resume}
          target="_blank"
          rel="noreferrer"
          download="MdFaizan_Resume.pdf"
        >
          Resume <DownloadIcon />
        </a>
      </StyledButton>
    </ResumeContainerDiv>
  );
}

const ResumeContainerDiv = styled.div`
  position: fixed;
  top: 20px;
  width: 99%;
  margin: auto;
  padding: 8px 5px;
  display: flex;
  justify-content: end;
  z-index: 1000;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #89d8d3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #145bbf;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #104a9f;
    transform: translateY(0);
  }

  svg {
    margin-left: 10px;
    font-size: 12px;
  }
`;
