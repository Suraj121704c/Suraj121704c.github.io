import styled from "@emotion/styled";
import React, { useState } from "react";
import HeaderSection from "../../Helper/HeaderSection";
import TabSelection from "../../Helper/TabSelection";
import BigProject from "./BigProject";
import MiniProject from "./MiniProject";
import {
  TabComponentStyled,
  TabsContainerStyled,
} from "../SkillsFolder/Skills";
import CustomCarousel from "../../Helper/CustomCarousel";

export default function Projects() {
  const projectComponent = [
    { tabName: "Projects", componet: <BigProject /> },
    { tabName: "Mini Projects", componet: <MiniProject /> },
  ];

  const [selectedTab, setSelectedTab] = useState(projectComponent[0]);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <ProjectContainerStyled id="Projects">
      <HeaderSection title={selectedTab.tabName} />
      <TabsContainerStyled>
        {projectComponent &&
          projectComponent.map((ele, i) => (
            <TabSelection
              allTabs={ele}
              key={i}
              onTabCLick={() => handleTabClick(ele)}
            />
          ))}
      </TabsContainerStyled>

      <TabComponentStyled>{selectedTab.componet}</TabComponentStyled>
    </ProjectContainerStyled>
  );
}

const ProjectContainerStyled = styled.div`
  margin-top: 10px;
`;

export let mini_project_list = [
  {
    image:
      "https://github.com/user-attachments/assets/8ad87c05-2cd0-4ce3-9934-e20ff78a88a4",
    name: "FaizanTalks",
    live: "https://faizantalks.vercel.app/",
  },
  {
    image:
      "https://github.com/mdfaizan973/mdfaizan973/assets/106812942/a3f0797e-71b4-4d55-a9f0-a48d058e1ddc",
    name: "FitnessFuel",
    live: "https://frontend-iota-blond.vercel.app/",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/262247221-6b79b2f0-da86-4fcb-b4f7-8abe6439712e.png",
    name: "FashionZone",
    live: "https://myfashionzonefz.netlify.app/",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255404404-dc6669bc-a638-4d99-95ed-5c4cf2b40cb9.png",
    name: "RentEZ",
    live: "https://yes-5otwzwn11-mdfaizan973.vercel.app/",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/221214462-36c35e3a-f00e-4c5f-a874-aadc6a6503d2.png",
    name: "Sweets-Flowers",
    live: "https://flowerfz.netlify.app/",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/253805221-728fdb9e-b7e2-489c-9364-8cc527fd1a4e.png",
    name: "Cobra's Revenge",
    show: true,
    live: "https://snackf.netlify.app/",
    github: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/260703096-29803c53-ca47-4921-84de-97235c984ff6.png",
    name: "Fc Food",
    show: true,
    live: "https://food-fz.netlify.app/",
    github: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/253805544-cd5ef2f3-2bf2-47b4-a157-6f85bc6645d6.png",
    name: "User Management System",
    show: true,
    live: "https://usermanagementsystemfaizan.netlify.app/",
    github: "",
  },
  {
    image: "https://i.ibb.co/jGcL5ps/Screenshot-1896.png",
    name: "Google",
    show: true,
    live: "https://googlefz.vercel.app/",
    github: "",
  },
  {
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/106812942/265500903-014dd368-21f0-4c72-8686-ad70aa52d036.png",
    name: "Github User Search",
    show: true,
    live: "https://githubusersearchfz.netlify.app/",
    github: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/253806168-de2fad04-379e-42cc-b0e0-4d3ec4cf28e3.png",
    name: "Weather App",
    show: true,
    live: "https://weatherapp-f.netlify.app/",
    github: "",
  },

  {
    image:
      "https://user-images.githubusercontent.com/106812942/253806382-dd9a140c-6e69-4cd6-b585-96a58564a035.png",
    name: "Js-Stop Watch",
    show: true,
    live: "https://fz-stopwatch.netlify.app/",
    github: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/253806601-6360d5ec-d876-4c51-baca-c0c63ed0e1c2.png",
    name: "Calculator",
    show: true,
    live: "https://masaiscalculator.netlify.app/",
    github: "",
  },
  {
    image:
      "https://github.com/mdfaizan973/Post-Fz/assets/106812942/0bc10b61-95f4-4d0f-87e2-31c86428cf21",
    name: "BMI Calculator",
    show: true,
    live: "https://bmicalculatorfz.vercel.app/",
    github: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/253824925-49de4bc7-d3fd-4b5b-8065-cbb0dc8d541a.png",
    name: "Students DataBase",
    show: true,
    live: "https://students-data-base.netlify.app/",
    github: "",
  },

  {
    image:
      "https://user-images.githubusercontent.com/106812942/260710892-5311deb8-5020-42b8-8042-206387db0350.png",
    name: "Carousel",
    show: true,
    live: "https://carausal-fz.netlify.app/",
    github: "",
  },
];
