import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Box, Card, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { Badge } from "antd";
import ResponsiveCard from "./ResponsiveCard";

const sliderData1 = [
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255094909-ccb4d46c-a531-42e1-8d6a-300641127a91.png",
    name: "HTML",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255088314-35bd02cd-4771-4156-9409-5f5a4c74155a.png",
    name: "CSS",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255094159-1381596d-06ae-422b-9321-94903c9c6cb3.png",
    name: "Java-Script",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255093713-fc4acefd-5ae5-469a-ac28-75fff76f758a.png",
    name: "React",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/278868564-8627170b-5eb9-4d18-84e8-4d7096bb4079.png",
    name: "Angular",
  },
  {
    image:
      "https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png",
    name: "Chakra UI",
  },

  {
    image:
      "https://user-images.githubusercontent.com/106812942/255088544-e2550044-1df8-440b-baf1-6dca2ba9165e.png",
    name: "Tailwind CSS",
  },
  {
    image:
      "https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-dl3neb73.png",
    name: "Ant Design",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTyuFXQDDOUPdafq8kkiBQ1Ai-ovU_avXecDIkszkPTeOxZ5R8H8g99xl6vRfQH-w4BA&usqp=CAU",
    name: "Axios",
  },
  {
    image:
      "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
    name: "Redux",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086458-7f6be61d-ffe1-4096-af30-2a39e7b3ed6f.png",
    name: "Type-Script",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLq7oAaEf0OSnwEjISs6UZbZBkbkwIUV7Rw&usqp=CAU",
    name: "React Router",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255087494-28073997-96d4-48ce-9bb6-c46f9cbe48b9.png",
    name: "Node.js",
  },
  {
    image:
      "https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
    name: "Express.js",
  },
  {
    image:
      "https://user-images.githubusercontent.com/106812942/255086972-9cb90d62-a556-474f-920f-aba5a0e9684d.png",
    name: "Mongo DB",
  },
];

export default function Skills() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="200px" marginLeft="40px" zIndex={1}>
      <ChevronLeftIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-35px" marginLeft="1460px">
      <ChevronRightIcon
        boxSize={10}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <DIV id="skills">
      <h1>Skills</h1>
      {/* <Slider {...settings}>
        {sliderData1.map((el, index) => {
          return (
            <div key={index} className="skills-card">
              <Box width={"100%"}>
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <Image
                    ml={"32%"}
                    w={"32%"}
                    borderRadius="18px"
                    className="skills-card-img"
                    src={el.image}
                  />
                  <Text fontSize={"1.7rem"} className="skills-card-name">
                  </Text>
                </AnimationOnScroll>
              </Box>
            </div>
          );
        })}
      </Slider> */}
      <div class="skill-section">
        <div class="skill-list">
          {sliderData1.map((el, index) => {
            return (
              // <Card
              //   data-aos="fade-up"
              //   data-aos-anchor-placement="center-bottom"
              // >
              <div
                key={index}
                class="skill-card"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <Badge.Ribbon
                  text={el.name}
                  color="tomato"
                  style={{ fontWeight: "bold" }}
                >
                  <img src={el.image} alt="CSS" class="skill-image" />
                  {/* <Badge.Ribbon text={el.name} color="red">
                    <Text visibility={"hidden"}>{el.name}</Text>
                  </Badge.Ribbon> */}
                </Badge.Ribbon>
              </div>
              // </Card>
            );
          })}
        </div>
      </div>
      {/* Added Badge and comment the Text */}
      <hr />
      {/* <ResponsiveCard /> */}
    </DIV>
  );
}

const DIV = styled.div`
  margin: auto;
  margin-top: 10px;
  height: 100%;
  width: 80%;

  h1 {
    font-size: 3rem;
  }

  .skills-card {
    margin-top: 25px;
  }

  /*  */
  .skill-section {
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    margin: 20px;
    display: inline-block;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 0;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .skill-card {
    border-radius: 10px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    /* box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8e8e8;
    padding: 10px;
    text-align: center;
    transition: transform 0.3s ease;
    width: 150px;
  }
  .skill-card:hover {
    /* box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff; */
  }
  .skill-image {
    max-width: 100px;
    height: auto;
    margin: 0 auto 10px;
    border-radius: 20px;
  }

  /* Responsive styles */
  @media screen and (max-width: 768px) {
    .skill-card {
      text-align: center;
      width: calc(50% - 10px);
    }
    .skill-image {
      max-width: 75px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .skill-card {
      width: calc(33.33% - 10px);
    }
  }
`;
