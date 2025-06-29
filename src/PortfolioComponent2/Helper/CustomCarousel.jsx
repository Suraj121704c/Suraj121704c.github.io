import React from "react";
import { Carousel } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export default function CustomCarousel({ carouselData }) {
  const handleEyeClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const contentStyle = {
    height: "100%",
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    margin: "10px",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Display 4 items at a time
    slidesToScroll: 1, // Scroll 1 item at a time
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Carousel {...carouselSettings}>
        {carouselData.map((ele, i) => (
          <div key={i}>
            <div style={contentStyle}>
              <a href={ele.live} target="_blank" rel="noreferrer">
                <img src={ele.image} alt="logo.png" />
              </a>
              <EyeIconButton onClick={() => handleEyeClick(ele.live)}>
                <EyeOutlined />
              </EyeIconButton>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const EyeIconButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 123, 255, 0.9);
  color: #ffffff;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.7rem;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 86, 179, 0.9);
    transform: scale(1.1);
  }
`;
