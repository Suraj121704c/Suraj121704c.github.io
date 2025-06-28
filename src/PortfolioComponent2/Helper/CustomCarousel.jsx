import React from "react";
import { Carousel } from "antd";

export default function CustomCarousel({ carouselData }) {
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
          <div>
            <div style={contentStyle}>
              <a href={ele.live} target="_blank" rel="noreferrer">
                <img src={ele.image} alt="logo.png" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
