import styled from "@emotion/styled";
import React from "react";
import { Tag } from "antd";

// Main projects array (from BigProject)
const main_projects = [
  {
    title: "Qwik - Loan for All",
    description:
      "This application is designed to provide student loans to university students in the U.S., especially those with low or limited credit (CIBIL) scores. It features a robust KYC verification system, real-time location tracking, and seamless credit score checks to ensure secure and responsible lending. In addition to lending, the app includes tools for expense management and personalized credit-building guidance to help users improve their financial profiles. Users can access both virtual and physical credit cards issued through the app, enabling secure and flexible spending. The platform also supports QR-based transactions for fast and convenient payments.",
    techStack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Jest Testing" },
      { name: "QR Code" },
      { name: "Payment Gateway" },
      { name: "Document Upload" },
      { name: "PDF Viewer" },
      { name: "App Security" },
      { name: "Push Notifications" },
      { name: "Deep Linking" },
    ],
    bg: "#e8f5e8",
    liveURL:
      "https://drive.google.com/file/d/1C5Dm3oFQTE1CQiolUQkh2JA_S_UXxsTK/view",
  },
  {
    title: "MyWeels - Pick and Drop",
    description:
      "A convenient pick-and-drop mobility platform that connects passengers with nearby drivers for safe and reliable transportation, using real-time location tracking to ensure quick pickups and smooth rides—just like Ola or Uber.",
    techStack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Jest Testing" },
      { name: "Real-time Location" },
      { name: "Payment Integration" },
      { name: "App Security" },
      { name: "Push Notifications" },
    ],
    bg: "#fff3cd",
    liveURL: "https://apps.apple.com/in/app/myweels-driver/id6480179296",
  },
  {
    title: "Couple Bible",
    description:
      "A Spiritual Connection and Learning Platform. The app combines spiritual guidance with modern technology to create an immersive and meaningful experience for individuals and couples seeking to strengthen their faith and biblical understanding. Whether users are looking for daily inspiration, deep biblical study, or ways to grow spiritually with their partner, Bible Bonding provides the tools and content to support their journey.",
    techStack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Supabase" },
      { name: "Apple Login" },
      { name: "Push Notifications" },
      { name: "Deep Linking" },
    ],
    bg: "#f8d7da",
    liveURL: "https://apps.apple.com/in/app/couple-bible/id6744287078",
  },
  {
    title: "Sai Alerts - Grocery Shop Management",
    description:
      "There are around 10 plus application that are designed to prevent theft in shops. Users can automatically generate bills using the app while shopping. In the event of an attempted theft, the app sends a notification directly to the user's mobile device. Additionally, the application helps with crowd management by detecting queues through the shop's camera system and notifying users about them.",
    techStack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Jest Testing" },
      { name: "Notification Deep Linking" },
      { name: "Real-time Notifications" },
    ],
    bg: "#d1ecf1",
    liveURL: "https://apps.apple.com/in/app/sai-alerts/id1582185206",
  },
  {
    title: "DigiApp - Payment Gateway (Trinidad and Tobago)",
    description:
      "This is a payment gateway app for a Trinidad and Tobago bank. The app is built using the latest React Native version 0.73 with Redux Toolkit for state management. It is available on both Android and iOS platforms. The app includes an authentication flow with notification deep linking, QR code generation and scanning, allowing users to complete payments via QR code in less than 10 seconds. It also supports document upload for loan creation using multipart file uploads, and includes a PDF view for loan. Also written Unit test cases in Jest.",
    techStack: [
      { name: "React Native 0.73" },
      { name: "Redux Toolkit" },
      { name: "Jest Testing" },
      { name: "QR Code Generation" },
      { name: "Payment Gateway" },
      { name: "Document Upload" },
      { name: "PDF Viewer" },
    ],
    bg: "#d4edda",
    liveURL:
      "https://apps.apple.com/in/app/tech-u-e-services-mobile-app/id6476198113",
  },
  {
    title: "IAF eRading - Indian AirForce War Information",
    description:
      "This application serves as a comprehensive repository for all information pertaining to the Indian Air Force. Designed to be fully responsive, it seamlessly supports multiple mobile devices, including Android, iOS, and tablets. Users can access a range of information related to wars, as well as details about organised events within the Indian Air Force.",
    techStack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Jest Testing" },
      { name: "Event Management" },
      { name: "Push Notifications" },
      { name: "Deep Linking" },
    ],
    bg: "#f8f9fa",
    liveURL:
      "https://play.google.com/store/apps/details?id=com.refread.iafereading&hl=en",
  },
];

// Mini projects array (only playPrince)
const mini_project_list = [
  {
    title: "playPrince",
    description:
      "A fun and interactive mini project  for playing videos and songs without adding any ads",
    techStack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Jest Testing" },
      { name: "Push Notifications" },
      { name: "Deep Linking" },
    ],
    bg: "#daf7f1",
    liveURL:
      "https://drive.google.com/file/d/1lK75vWCbbMIw64KIaDzSQp2EmIOZuhWt/view?usp=sharing",
    image:
      "https://github.com/user-attachments/assets/8ad87c05-2cd0-4ce3-9934-e20ff78a88a4",
  },
];

export default function Projects() {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {main_projects.map((ele, i) => (
          <ProjectCardStyled key={i} bg={ele.bg}>
            <CardOverlay>
              <CardContent>
                <CardHeader>
                  <Title>{ele.title}</Title>
                </CardHeader>
                <Description>
                  {ele.description.length > 100
                    ? ele.description.slice(0, 100) + "..."
                    : ele.description}
                </Description>
                <TechStack>
                  {ele.techStack.map((tech, index) => (
                    <Tag key={index} color={"black"}>
                      {tech.name}
                    </Tag>
                  ))}
                </TechStack>
                <ButtonGroup>
                  <Button
                    target="_blank"
                    href={ele.liveURL || undefined}
                    disabled={!ele.liveURL}
                  >
                    Live
                  </Button>
                </ButtonGroup>
              </CardContent>
            </CardOverlay>
          </ProjectCardStyled>
        ))}
      </ProjectGrid>
      <SectionTitle>Mini Projects</SectionTitle>
      <ProjectGrid>
        {mini_project_list.map((ele, i) => (
          <ProjectCardStyled key={i} bg={ele.bg}>
            <CardOverlay>
              <CardContent>
                <CardHeader>
                  <Title>{ele.title}</Title>
                </CardHeader>
                <Description>
                  {ele.description.length > 100
                    ? ele.description.slice(0, 100) + "..."
                    : ele.description}
                </Description>
                <TechStack>
                  {ele.techStack.map((tech, index) => (
                    <Tag key={index} color={"black"}>
                      {tech.name}
                    </Tag>
                  ))}
                </TechStack>
                <ButtonGroup>
                  <Button
                    target="_blank"
                    href={ele.liveURL || undefined}
                    disabled={!ele.liveURL}
                  >
                    Live
                  </Button>
                </ButtonGroup>
              </CardContent>
            </CardOverlay>
          </ProjectCardStyled>
        ))}
      </ProjectGrid>
    </>
  );
}

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 32px 0 16px 0;
  color: #222;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: flex-start;
`;

const ProjectCardStyled = styled.div`
  width: 300px;
  height: 350px;
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
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TechStack = styled.p`
  font-size: 0.85rem;
  text-align: start;
  margin-bottom: -20px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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
  display: inline-block;
  text-align: center;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: #218838;
    transform: translateY(-3px);
    box-shadow: 0px 6px 10px rgba(40, 167, 69, 0.5);
  }
`;
