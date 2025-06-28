import styled from "@emotion/styled";
import React from "react";

export default function TabSelection({ allTabs, onTabCLick }) {
  const { tabName } = allTabs;

  return (
    <TabsContainerStyled>
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
  }

  .tabs::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: black;
    transition: width 0.3s ease;
  }

  .tabs:hover::after {
    width: 100%;
  }
`;
