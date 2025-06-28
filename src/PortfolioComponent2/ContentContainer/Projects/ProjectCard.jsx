import { ViewIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { Tag } from "antd";

export default function ProjectCard({ handleDetails, ele }) {
  return (
    <>
      <ProjectCardStyled bg={ele.bg}>
        <CardOverlay>
          <CardContent>
            <CardHeader>
              <Title>{ele.title}</Title>
              <div className="view_icon" onClick={() => handleDetails(ele)}>
                <ViewIcon />
              </div>
            </CardHeader>

            <Description>{ele.description}</Description>
            <TechStack>
              {ele &&
                ele.techStack.map((tech, index) => (
                  <Tag key={index} color={"black"}>
                    {tech.name}
                  </Tag>
                ))}
            </TechStack>
            <ButtonGroup>
              <Button target="_blank" href={ele.liveURL}>
                Live
              </Button>
              <Button target="_blank" href={ele.githubURL}>
                Code
              </Button>
            </ButtonGroup>
          </CardContent>
        </CardOverlay>
      </ProjectCardStyled>
    </>
  );
}

const ProjectCardStyled = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 12px;
  /* background-color: #daf7f1; */
  background: ${({ bg }) => bg || "#daf7f1"}; /* Use prop or default */
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

  .view_icon {
    font-size: 1rem;
    color: blue;

    &:hover {
      font-size: 1.2rem;
    }
  }
`;
const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  /* margin-bottom: 8px; */
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
