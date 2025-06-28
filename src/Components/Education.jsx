import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Edu.css";
import styled from "styled-components";
import { Card } from "@chakra-ui/react";
import { Timeline, Tag, Typography, Badge } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;
export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "15px" }}
      >
        EDUCATION
      </h1>
      <div class="timeline">
        <div class="container left">
          {/* <Badge.Ribbon text="BBMK-University" color="red"> */}
          <div class="content" data-aos="flip-up">
            <h2>BCA (Bachelor of Computer Application) </h2>
            <h3>Binod Bihari Mahto Koyalanchal University</h3>
            <p>August 2023 - Present</p>
          </div>
          {/* </Badge.Ribbon> */}
        </div>
        <div class="container right">
          {/* <Badge.Ribbon text="Masai School" color="red"> */}
          <div class="content" data-aos="flip-down">
            <h2>Full Stack Web Developement</h2>
            <h3>Masai School</h3>
            <p>August 2022 - July 2023</p>
          </div>
          {/* </Badge.Ribbon> */}
        </div>
        <div class="container left">
          {/* <Badge.Ribbon text="High School Gomia" color="red"> */}
          <div class="content" data-aos="flip-up">
            <h2>Intermediate</h2>
            <h3>High School Gomia</h3>
            <p>June 2020 - July 2022</p>
          </div>
          {/* </Badge.Ribbon> */}
        </div>
        <div class="container right">
          {/* <Badge.Ribbon text="Loyola School Gomia" color="red"> */}
          <div class="content" data-aos="flip-down">
            <h2>Matriculation</h2>
            <h3>Loyola School Gomia</h3>
            <p>April 2010 - May 2020</p>
          </div>
          {/* </Badge.Ribbon> */}
        </div>
      </div>
      {/* <CustomTimeline /> */}
    </div>
  );
}

const CustomTimeline = () => {
  return (
    <Timeline mode="alternate">
      <StyledTimelineItem>
        <Text>Start Project 2021-01-01</Text>
      </StyledTimelineItem>
      <StyledTimelineItem color="green">
        <Text>Project Phase 1 Completed 2021-03-01</Text>
      </StyledTimelineItem>
      <StyledTimelineItem
        dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
        color="red"
      >
        <Text>Project Phase 2 Deadline 2021-06-01</Text>
      </StyledTimelineItem>
      <StyledTimelineItem>
        <Text>Project Phase 2 Completed 2021-05-15</Text>
      </StyledTimelineItem>
      <StyledTimelineItem color="blue">
        <Text>
          Project Review Meeting 2021-06-20
          <Tag color="blue">Review</Tag>
        </Text>
      </StyledTimelineItem>
      <StyledTimelineItem
        dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
        color="red"
      >
        <Text>Final Project Deadline 2021-09-01</Text>
      </StyledTimelineItem>
      <StyledTimelineItem color="green">
        <Text>Project Completed 2021-08-30</Text>
      </StyledTimelineItem>
    </Timeline>
  );
};
const StyledTimelineItem = styled(Timeline.Item)`
  .ant-typography {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.primaryColor};
  }
`;
