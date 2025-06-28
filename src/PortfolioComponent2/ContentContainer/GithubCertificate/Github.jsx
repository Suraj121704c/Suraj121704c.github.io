import React from "react";
import GitHubCalendar from "react-github-calendar";
import HeaderSection from "../../Helper/HeaderSection";
import { Card } from "antd";
import styled from "@emotion/styled";

export default function Github() {
  return (
    <div id="Github">
      <HeaderSection title={"Github"} />
      <Card>
        <GitHubCalendar
          username="mdfaizan973"
          className="react-activity-calendar"
        />
      </Card>

      <StatsContainer>
        <Card>
          <StatImage
            src="https://github-readme-streak-stats.herokuapp.com/?user=mdfaizan973&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
            alt="GitHub Streak Stats"
          />
        </Card>
        <Card>
          <StatImage
            src="https://github-readme-stats.vercel.app/api?username=mdfaizan973&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
            alt="GitHub Stats"
          />
        </Card>
      </StatsContainer>
    </div>
  );
}
const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StatImage = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
