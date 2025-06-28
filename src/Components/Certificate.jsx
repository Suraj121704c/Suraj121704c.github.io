import React, { useState } from "react";
import styled from "styled-components";
import { Badge, Modal } from "antd";

// Styled components
const AllCertificates = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const CertificateContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  max-width: 200px;
  text-align: center;
  cursor: pointer;
`;

const CertificateCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// Component
const Certificate = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const certificates_arr = [
    {
      img: "https://i.ibb.co/BG9Dxxs/hakerrankjavascript.png",
      name: "Haker Rank {JS}",
    },
    {
      img: "https://i.ibb.co/Gpf39bz/cutshorthtmlcss.png",
      name: "CutShort {HTML/CSS}",
    },
    {
      img: "https://i.ibb.co/mNmFNyk/cutshort.png",
      name: "CutShort {NodeJS}",
    },
    {
      img: "https://i.ibb.co/4p7drph/zommarathonsession5.png",
      name: "Zoom Marathon {S-5}",
    },
    {
      img: "https://i.ibb.co/v4bXNZX/Blue-Minimalist-Certificate-Of-Achievement.png",
      name: "Zoom Marathon {S-6}",
    },
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <h1 className="proj-title" style={{ fontSize: "3rem", marginTop: "8px" }}>
        Certificates
      </h1>
      <AllCertificates>
        {certificates_arr.map((ele, i) => (
          <Badge.Ribbon text={ele.name} color="red" key={i}>
            <CertificateContainer onClick={() => openModal(ele.img)}>
              <CertificateCardImage
                src={ele.img}
                alt={`Certificate ${i + 1}`}
              />
            </CertificateContainer>
          </Badge.Ribbon>
        ))}
      </AllCertificates>
      <Modal
        title=""
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <CertificateCardImage src={selectedImage} alt="Certificate Preview" />
      </Modal>
    </>
  );
};

export default Certificate;
