import styled from "@emotion/styled";
import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
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
      { name: "Notification Deep Linking" },
      { name: "Real-time Notifications" },
      { name: "Web Sockets" },
      { name: "Push Notifications" },
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
  {
    title: "voiceAssistant",
    description:
      "A Ai powered voice assistant that can help you with your daily tasks and can also help you with your queries , you can send your queries to the assistant and it will give you the answer",
    techStack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Text to Speech" },
      { name: "Voice Recording" },
      { name: "OpenAI API" },
    ],
    bg: "#d4edda",
    liveURL:
      "https://drive.google.com/file/d/15MajdjLqFGxZPaCyHpN4IkwB9z9WBBeY/view?usp=sharing",
    image:
      "https://github.com/user-attachments/assets/8ad87c05-2cd0-4ce3-9934-e20ff78a88a4",
  },
];

export default function Projects() {
  const { colorMode } = useColorMode();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e, index) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setHoveredCard(null);
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  return (
    <>
      <SectionTitle colorMode={colorMode}>Projects</SectionTitle>
      <ProjectGrid>
        {main_projects.map((ele, i) => (
          <ProjectCardStyled
            key={i}
            bg={ele.bg}
            colorMode={colorMode}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={(e) => handleMouseLeave(e, i)}
            onMouseEnter={() => handleMouseEnter(i)}
            isHovered={hoveredCard === i}
          >
            <CardOverlay>
              <CardContent>
                <CardHeader>
                  <Title colorMode={colorMode}>{ele.title}</Title>
                </CardHeader>
                <Description colorMode={colorMode}>
                  {ele.description.length > 100
                    ? ele.description.slice(0, 100) + "..."
                    : ele.description}
                </Description>
                <TechStack colorMode={colorMode}>
                  {ele.techStack.map((tech, index) => (
                    <Tag
                      key={index}
                      color={colorMode === "dark" ? "blue" : "black"}
                    >
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
      <SectionTitle colorMode={colorMode}>Mini Projects</SectionTitle>
      <ProjectGrid>
        {mini_project_list.map((ele, i) => (
          <ProjectCardStyled
            key={i + main_projects.length}
            bg={ele.bg}
            colorMode={colorMode}
            onMouseMove={(e) => handleMouseMove(e, i + main_projects.length)}
            onMouseLeave={(e) => handleMouseLeave(e, i + main_projects.length)}
            onMouseEnter={() => handleMouseEnter(i + main_projects.length)}
            isHovered={hoveredCard === i + main_projects.length}
          >
            <CardOverlay>
              <CardContent>
                <CardHeader>
                  <Title colorMode={colorMode}>{ele.title}</Title>
                </CardHeader>
                <Description colorMode={colorMode}>
                  {ele.description.length > 100
                    ? ele.description.slice(0, 100) + "..."
                    : ele.description}
                </Description>
                <TechStack colorMode={colorMode}>
                  {ele.techStack.map((tech, index) => (
                    <Tag
                      key={index}
                      color={colorMode === "dark" ? "blue" : "black"}
                    >
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
  color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "#222")};
  transition: color 0.3s ease;
  transform: translateZ(0);
  animation: slideInFromLeft 0.8s ease-out;

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px) translateZ(0);
    }
    to {
      opacity: 1;
      transform: translateX(0) translateZ(0);
    }
  }
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: flex-start;
  perspective: 1000px;
`;

const ProjectCardStyled = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 12px;
  background: ${({ bg, colorMode }) =>
    colorMode === "dark" ? "#2d3748" : bg || "#daf7f1"};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ colorMode }) =>
    colorMode === "dark"
      ? "rgba(255, 255, 255, 0.1) 0px 3px 5px"
      : "rgba(0, 0, 0, 0.1) 0px 3px 5px"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  animation: cardFloatIn 0.6s ease-out ${({ index }) => index * 0.1}s both;

  &:hover {
    box-shadow: ${({ colorMode }) =>
      colorMode === "dark"
        ? "rgba(255, 255, 255, 0.2) 0px 20px 40px, 0 0 0 1px rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.2) 0px 20px 40px, 0 0 0 1px rgba(0, 0, 0, 0.1)"};
  }

  @keyframes cardFloatIn {
    from {
      opacity: 0;
      transform: perspective(1000px) rotateX(20deg) rotateY(-20deg)
        translateY(50px) scale3d(0.8, 0.8, 0.8);
    }
    to {
      opacity: 1;
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)
        scale3d(1, 1, 1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: 12px;
  }

  &:hover::before {
    opacity: 1;
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
  transform: translateZ(20px);
  transition: transform 0.3s ease;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #ffffff;
  transform: translateZ(10px);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateZ(15px);
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: start;
  color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
  transition: all 0.3s ease;
  transform: translateZ(5px);

  &:hover {
    transform: translateZ(5px) scale(1.05);
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "black")};
  margin-bottom: -10px;
  text-align: start;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
  transform: translateZ(5px);
`;

const TechStack = styled.p`
  font-size: 0.85rem;
  text-align: start;
  margin-bottom: -20px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ colorMode }) => (colorMode === "dark" ? "#e2e8f0" : "black")};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  transition: all 0.3s ease;
  transform: translateZ(5px);

  .ant-tag {
    transition: all 0.3s ease;
    transform: translateZ(2px);

    &:hover {
      transform: translateZ(2px) scale(1.1) rotateY(10deg);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  transform: translateZ(10px);
`;

const Button = styled.a`
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 6px rgba(40, 167, 69, 0.3);
  display: inline-block;
  text-align: center;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transform: translateZ(5px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #218838 0%, #1ea085 100%);
    transform: translateZ(5px) translateY(-3px) scale(1.05);
    box-shadow: 0px 8px 20px rgba(40, 167, 69, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateZ(5px) translateY(-1px) scale(1.02);
  }
`;
