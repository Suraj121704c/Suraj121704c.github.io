import styled from "@emotion/styled";
import { Collapse } from "antd";
import React from "react";
import { mini_project_list } from "./Projects";
import { EyeOutlined } from "@ant-design/icons";

export default function MiniProjectList() {
  const handleEyeClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Wrapper>
      {mini_project_list.map((ele, i) => (
        <CollapseItem key={i}>
          <Collapse
            collapsible="header"
            defaultActiveKey={[]}
            items={[
              {
                key: "1",
                label: <StyledLabel>{ele.name}</StyledLabel>,
                children: (
                  <Content>
                    <Image src={ele.image} alt={ele.name} />
                    <ButtonContainer>
                      <Button target="_blank" href={ele.live}>
                        Live
                      </Button>
                      <EyeButton onClick={() => handleEyeClick(ele.live)}>
                        <EyeOutlined />
                      </EyeButton>
                    </ButtonContainer>
                  </Content>
                ),
              },
            ]}
          />
        </CollapseItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CollapseItem = styled.div`
  flex: 1 1 48%;
  max-width: 48%;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin-right: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 12px;
  }
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
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0px 6px 10px rgba(40, 167, 69, 0.5);
  }
`;

const StyledLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const EyeButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0px 3px 6px rgba(0, 123, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0px 6px 10px rgba(0, 123, 255, 0.5);
  }
`;
