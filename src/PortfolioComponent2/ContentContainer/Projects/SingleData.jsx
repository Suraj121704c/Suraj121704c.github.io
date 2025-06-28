import styled from "@emotion/styled";
import { Tag } from "antd";
import React from "react";

export default function SingleData({ handleCancel, singleData }) {
  const { title, techStack, description, backgroundImage, githubURL, liveURL } =
    singleData;

  return (
    <div>
      <Container bg={singleData.bg}>
        <HeaderSection>
          <Title>{title}</Title>
          <Image src={backgroundImage} alt="Dashboard" />
        </HeaderSection>

        <Description>{description}</Description>

        <StatusTagContainer>
          {techStack.map((ele, i) => (
            <Tag color="black">{ele.name}</Tag>
          ))}
        </StatusTagContainer>
        <ButtonGroup>
          <div>
            <Button target="_blank" href={liveURL}>
              Live
            </Button>
            <Button target="_blank" href={githubURL}>
              Code
            </Button>
          </div>
          <Button style={{ borderRadius: "50%" }} onClick={handleCancel}>
            X
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  width: 80%;
  margin: 0 auto;
  /* background-color: #daf7f1; */
  background: ${({ bg }) => bg || "#daf7f1"}; /* Use prop or default */

  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  text-align: start;
  color: black;
`;

const StatusTagContainer = styled.div`
  margin-top: 12px;
  text-align: start;
`;

const Description = styled.p`
  margin: 12px 0;
  font-size: 16px;
  text-align: start;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
`;

const Button = styled.a`
  background-color: #ffff;
  color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 8px;
  margin-right: 8px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
`;
