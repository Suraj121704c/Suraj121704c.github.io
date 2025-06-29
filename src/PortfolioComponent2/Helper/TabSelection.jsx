import styled from "@emotion/styled";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

export default function TabSelection({ allTabs, onTabCLick }) {
  const { colorMode } = useColorMode();
  const { tabName } = allTabs;

  return (
    <TabsContainerStyled colorMode={colorMode}>
      <div className="tabs" onClick={onTabCLick}>
        {tabName && tabName}
      </div>
    </TabsContainerStyled>
  );
}

const TabsContainerStyled = styled.div`
  .tabs {
    font-weight: bold;
    padding: 2px 10px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
    transition: color 0.3s ease;
  }

  .tabs::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? "white" : "black"};
    transition: width 0.3s ease;
  }

  .tabs:hover::after {
    width: 100%;
  }
`;
