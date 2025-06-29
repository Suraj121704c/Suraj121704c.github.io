import React from "react";
import styled from "@emotion/styled";
import { Tag } from "antd";
import { mini_project_list } from "./Projects";

export default function MiniProject() {
  // Placeholder details for playPrince
  const miniProject = {
    ...mini_project_list[0],
    title: mini_project_list[0].name,
    description:
      "A fun and interactive mini project platform for quick games and entertainment.",
    techStack: [{ name: "React" }, { name: "JavaScript" }, { name: "CSS" }],
    bg: "#daf7f1",
    liveURL: mini_project_list[0].live,
    githubURL: "",
  };

  return (
    <ProjectCardStyled bg={miniProject.bg}>
      <CardOverlay>
        <CardContent>
          <CardHeader>
            <Title>{miniProject.title}</Title>
          </CardHeader>
          <Description>{miniProject.description}</Description>
          <TechStack>
            {miniProject.techStack.map((tech, index) => (
              <Tag key={index} color={"black"}>
                {tech.name}
              </Tag>
            ))}
          </TechStack>
          <ButtonGroup>
            <Button target="_blank" href={miniProject.liveURL}>
              Live
            </Button>
            {miniProject.githubURL && (
              <Button target="_blank" href={miniProject.githubURL}>
                Code
              </Button>
            )}
          </ButtonGroup>
        </CardContent>
      </CardOverlay>
    </ProjectCardStyled>
  );
}

const ProjectCardStyled = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 12px;
  background: ${({ bg }) => bg || "#daf7f1"};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px;
  }
`;

const CardOverlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #ffffff;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: start;
  color: black;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: black;
  margin-bottom: -10px;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TechStack = styled.p`
  font-size: 0.85rem;
  text-align: start;
  margin-bottom: -20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

const Button = styled.a`
  background-color: #28a745;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0px 3px 6px rgba(40, 167, 69, 0.3);
  &:hover {
    background-color: #218838;
    transform: translateY(-3px);
    box-shadow: 0px 6px 10px rgba(40, 167, 69, 0.5);
  }
`;
