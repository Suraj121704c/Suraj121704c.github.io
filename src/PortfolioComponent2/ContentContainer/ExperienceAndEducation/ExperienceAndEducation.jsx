import React, { useState } from "react";
import HeaderSection from "../../Helper/HeaderSection";
import styled from "@emotion/styled";
import TabSelection from "../../Helper/TabSelection";
import {
  TabComponentStyled,
  TabsContainerStyled,
} from "../SkillsFolder/Skills";
import Education from "./Education";
import Experience from "./Experience";

export default function ExperienceAndEducation() {
  const eduxpeTabArray = [
    {
      tabName: "Experience",
      component: <Experience />,
    },
    {
      tabName: "Education",
      component: <Education />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(eduxpeTabArray[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  console.log(30, selectedTab);
  return (
    <EducationExperienceStyled id="Expe_Edu">
      <HeaderSection title={selectedTab.tabName} />
      <TabsContainerStyled>
        {eduxpeTabArray &&
          eduxpeTabArray.map((ele, i) => (
            <TabSelection
              allTabs={ele}
              key={i}
              onTabCLick={() => handleTabClick(ele)}
            />
          ))}
      </TabsContainerStyled>

      <TabComponentStyled>{selectedTab.component}</TabComponentStyled>
    </EducationExperienceStyled>
  );
}

const EducationExperienceStyled = styled.div`
  margin-top: 10px;
`;
