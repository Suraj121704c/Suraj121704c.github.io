import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import styled from "@emotion/styled";
import SingleData from "./SingleData";

export default function BigProject() {
  const [showDetails, setShowDetails] = useState(false);
  const [modalData, setModalData] = useState({});

  const projects = [
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
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "",
      liveURL: "",
      bg: "#e8f5e8",
      madeBy: "Under Development - Mar 2025 – present",
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
        { name: "Push Notifications" },
      ],
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "",
      liveURL: "",
      bg: "#fff3cd",
      madeBy: "May 2024 – Oct 2024",
    },

    {
      title: "Couple Bible",
      description:
        "A Spiritual Connection and Learning Platform. The app combines spiritual guidance with modern technology to create an immersive and meaningful experience for individuals and couples seeking to strengthen their faith and biblical understanding. Whether users are looking for daily inspiration, deep biblical study, or ways to grow spiritually with their partner, Bible Bonding provides the tools and content to support their journey.",
      techStack: [
        { name: "React Native" },
        { name: "Redux Toolkit" },
        { name: "Supabase" },
        { name: "Push Notifications" },
      ],
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "",
      liveURL: "",
      bg: "#f8d7da",
      madeBy: "May 2025 – present",
    },

    {
      title: "Sai Alerts - Grocery Shop Management",
      description:
        "There are around 10 plus application that are designed to prevent theft in shops. Users can automatically generate bills using the app while shopping. In the event of an attempted theft, the app sends a notification directly to the user's mobile device. Additionally, the application helps with crowd management by detecting queues through the shop's camera system and notifying users about them.",
      techStack: [
        { name: "React Native" },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "Express.js" },
        { name: "Computer Vision" },
        { name: "Real-time Notifications" },
        { name: "Billing System" },
      ],
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "",
      liveURL: "",
      bg: "#d1ecf1",
      madeBy: "Nov 2024 – present",
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
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "",
      liveURL: "",
      bg: "#d4edda",
      madeBy: "May 2024 – Nov 2024",
    },

    {
      title: "IAF eRading - Indian AirForce War Information",
      description:
        "This application serves as a comprehensive repository for all information pertaining to the Indian Air Force. Designed to be fully responsive, it seamlessly supports multiple mobile devices, including Android, iOS, and tablets. Users can access a range of information related to wars, as well as details about organised events within the Indian Air Force.",
      techStack: [
        { name: "React Native" },
        { name: "Responsive Design" },
        { name: "Cross-platform" },
        { name: "Content Management" },
        { name: "Information Repository" },
        { name: "Event Management" },
      ],
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "",
      liveURL: "",
      bg: "#f8f9fa",
      madeBy: "Jun 2022 – Mar 2023",
    },
  ];

  const handleDetails = (ele = "") => {
    setModalData(ele);
    setShowDetails(true);
  };

  const handleCancel = () => {
    setShowDetails(false);
  };
  return (
    <>
      {showDetails ? (
        <div>
          <SingleData handleCancel={handleCancel} singleData={modalData} />
        </div>
      ) : (
        <BigProjectContainer>
          {projects.map((ele, i) => (
            <ProjectCard key={i} handleDetails={handleDetails} ele={ele} />
          ))}
        </BigProjectContainer>
      )}
    </>
  );
}

const BigProjectContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
