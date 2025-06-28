import React, { useState } from "react";
import HeaderSection from "../../Helper/HeaderSection";
import styled from "@emotion/styled";
import FrontEndSkills from "./FrontEndSkills";
import Tools from "./Tools";
import BackendSkills from "./BackendSkills";
import TabSelection from "../../Helper/TabSelection";

export default function Skills() {
  const tabsNames = [
    {
      tabName: "FrontEnd",
      component: <FrontEndSkills />,
    },
    {
      tabName: "BackEnd",
      component: <BackendSkills />,
    },
    {
      tabName: "Tools",
      component: <Tools />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabsNames[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <SkillsContainerStyled id={"Skills"}>
      <HeaderSection title={`${selectedTab.tabName} Skills`} />

      <TabsContainerStyled>
        {tabsNames &&
          tabsNames.map((ele, i) => (
            <TabSelection
              allTabs={ele}
              key={i}
              onTabCLick={() => handleTabClick(ele)}
            />
          ))}
      </TabsContainerStyled>

      <TabComponentStyled>{selectedTab.component}</TabComponentStyled>
    </SkillsContainerStyled>
  );
}

const SkillsContainerStyled = styled.div`
  margin-top: 10px;
`;

export const TabsContainerStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TabComponentStyled = styled.div`
  width: 95%;
  margin: 20px auto;
  color: #75797c;
`;
