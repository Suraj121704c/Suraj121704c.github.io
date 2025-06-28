import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import styled from "@emotion/styled";
import SingleData from "./SingleData";

export default function BigProject() {
  const [showDetails, setShowDetails] = useState(false);
  const [modalData, setModalData] = useState({});

  const projects = [
    {
      title: "Organic Store",
      description:
        "An Organic Products website, Where person can buy all the Organics Food products.",
      techStack: [
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JS" },
        { name: "Tailwind CSS" },
        { name: "Axios" },
      ],
      backgroundImage:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      githubURL: "https://github.com/mdfaizan973/ZC_ORG",
      liveURL: "https://organicstore.vercel.app/",
      bg: "#daf7f1",
      madeBy: "Individuel - Project",
    },

    {
      title: "Learning Management System",
      description:
        "Learning Management System (LMS): A platform for students to learn programming.",
      techStack: [
        { name: "React" },
        { name: "HTML" },
        { name: "Node JS" },
        { name: "CSS" },
        { name: "JS" },
        { name: "Ant Design(CSS)" },
        { name: "Express JS" },
        { name: "Mongo DB" },
      ],
      backgroundImage:
        "https://github.com/mdfaizan973/EduHub-idea_clan/assets/106812942/ccee7c0f-1acd-4791-8208-b09b973f5cb1",
      githubURL: "https://github.com/mdfaizan973/EduHub-idea_clan",
      liveURL: "https://faizanlms.vercel.app/",
      bg: "#B0E0E6",
      madeBy: "Individuel - Project",
    },

    {
      title: "DropDock",
      description:
        "A secure and seamless document management platform where users can upload PDFs!",
      techStack: [
        { name: "React.js" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Mongo DB" },
        { name: "Multer" },
        { name: "React Router Dom" },
        { name: "Axios" },
      ],
      backgroundImage:
        "https://private-user-images.githubusercontent.com/106812942/420195799-225689b0-2279-47ce-86e2-9dbbf206bc6e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI0MjgwNjMsIm5iZiI6MTc0MjQyNzc2MywicGF0aCI6Ii8xMDY4MTI5NDIvNDIwMTk1Nzk5LTIyNTY4OWIwLTIyNzktNDdjZS04NmUyLTlkYmJmMjA2YmM2ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxOVQyMzQyNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYzU2NDc0YjJkNGVmYzY5NjhlNTVlMDUzY2JhODU1OTdlYmRlZjE0NTc0Mzk2YmUzZTE0ZDJmMzMyZDUzZmJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.M60zzGzgo2LZ2hZ8xW3MLOlzE8V8SyUgq-tylkTR99k",
      githubURL: "https://github.com/mdfaizan973/PDF_Uploader",
      liveURL: "https://pdf-dropdock.vercel.app/",
      bg: "#FFB6C1",
      madeBy: "Individuel - Project",
    },

    // {
    //   title: "FashionZone",
    //   description:
    //     "FashionZone is a website where a person can buy clothes of their choice with famous brands.",
    //   techStack: [
    //     { name: "React" },
    //     { name: "Axios" },
    //     { name: "React-Router-Dom" },
    //   ],
    //   backgroundImage:
    //     "https://user-images.githubusercontent.com/106812942/262247221-6b79b2f0-da86-4fcb-b4f7-8abe6439712e.png",
    //   githubURL: "https://github.com/mdfaizan973/FashioZone/",
    //   liveURL: "https://myfashionzonefz.netlify.app/",
    // bg:"red",
    // madeBy: "Individuel - Project",
    // },

    {
      title: "Clotho",
      description:
        "A clothes website where users can buy dresses for men, women, and kids.",
      techStack: [
        { name: "React" },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "Redux" },
        { name: "React-Router-Dom" },
        { name: "Axios" },
        { name: "Express.js" },
      ],
      backgroundImage:
        "https://github.com/mdfaizan973/mdfaizan973/assets/106812942/4eac3e09-97c4-4145-9cff-ce4c4ea5c93f",
      githubURL:
        "https://github.com/hrithikvishwakarma001/incredible-birth-7157",
      liveURL: "https://clotho.vercel.app/",
      bg: "#D8BFD8",
      madeBy: "Group - Project",
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
