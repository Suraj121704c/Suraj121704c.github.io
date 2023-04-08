import React from "react";
import geek from "../assests/pirate.png";
import lens from "../assests/lenskart.png";
import stale from "../assests/stylesup.png";
import { SiNetlify } from "react-icons/si";
import gojo from "../assests/gojo.png";
import { AiFillGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest </span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects"></div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="nav-link projects"
          id="nav-link-projects"
        >
          <SwiperSlide>
            {" "}
            <Stack
              minH={"100vh"}
              direction={{ base: "column", md: "row" }}
              className="project-card"
            >
              <Flex
                p={8}
                flex={1}
                align={"center"}
                justify={"center"}
                className="layer"
              >
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text
                      as={"span"}
                      position={"relative"}
                      className="project-title"
                      _after={{
                        content: "''",
                        width: "full",
                        height: useBreakpointValue({ base: "20%", md: "30%" }),
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "blue.400",
                        zIndex: -1,
                      }}
                    >
                      Frames Lobbey
                    </Text>
                    <br />{" "}
                    <Text
                      color={"blue.400"}
                      as={"span"}
                      className="project-tech-stack"
                    >
                      Tech-Stack : REACT, JS, HTML, CSS, ChakraUi
                    </Text>{" "}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color={"gray"}>
                    IAn enthusiast of a particular topic or field. Geeks are
                    “collection” oriented, gathering facts and mementos related
                    to their subject of interest. They are obsessed with the
                    newest, coolest, trendiest things .
                  </Text>
                  <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                    <Button
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      class="project-deployed-link"
                    >
                      <a
                        href="https://glassworldheaven.netlify.app/"
                        target="_blank"
                      >
                        Deployed
                      </a>
                    </Button>
                    <Button
                      rounded={"full"}
                      color={"green"}
                      className="project-github-link"
                    >
                      <a
                        href="https://github.com/Suraj121704c/excellent-noise-5475/tree/main/glassworld"
                        target="_blank"
                        id="project-deployed-link"
                      >
                        GitHub
                      </a>
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1}>
                <Image
                  alt={"StylesUp Image"}
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src={lens}
                />
              </Flex>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            <Stack
              minH={"100vh"}
              direction={{ base: "column", md: "row" }}
              className="project-card"
            >
              <Flex
                p={8}
                flex={1}
                align={"center"}
                justify={"center"}
                className="layer"
              >
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text
                      as={"span"}
                      position={"relative"}
                      className="project-title"
                      _after={{
                        content: "''",
                        width: "full",
                        height: useBreakpointValue({ base: "20%", md: "30%" }),
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "blue.400",
                        zIndex: -1,
                      }}
                    >
                      Pirated Store
                    </Text>
                    <br />{" "}
                    <Text
                      color={"blue.400"}
                      as={"span"}
                      className="project-tech-stack"
                    >
                      Tech-Stack : HTML , CSS, AdvaceJs
                    </Text>{" "}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color={"gray"}>
                    IAn enthusiast of a particular topic or field. Geeks are
                    “collection” oriented, gathering facts and mementos related
                    to their subject of interest. They are obsessed with the
                    newest, coolest, trendiest things .
                  </Text>
                  <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                    <Button
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      class="project-deployed-link"
                    >
                      <a
                        href="https://nimble-crostata-869bd1.netlify.app/"
                        target="_blank"
                      >
                        Deployed
                      </a>
                    </Button>
                    <Button
                      rounded={"full"}
                      color={"green"}
                      className="project-github-link"
                    >
                      <a
                        href="https://github.com/Shahid77137/abundant-coat-8487"
                        target="_blank"
                        id="project-deployed-link"
                      >
                        GitHub
                      </a>
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1}>
                <Image
                  alt={"StylesUp Image"}
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src={geek}
                />
              </Flex>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <Stack
              minH={"100vh"}
              direction={{ base: "column", md: "row" }}
              className="project-card"
            >
              <Flex
                p={8}
                flex={1}
                align={"center"}
                justify={"center"}
                className="layer"
              >
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text
                      as={"span"}
                      position={"relative"}
                      className="project-title"
                      _after={{
                        content: "''",
                        width: "full",
                        height: useBreakpointValue({ base: "20%", md: "30%" }),
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "blue.400",
                        zIndex: -1,
                      }}
                    >
                      Styles Up
                    </Text>
                    <br />{" "}
                    <Text
                      color={"blue.400"}
                      as={"span"}
                      className="project-tech-stack"
                    >
                      Tech-Stack - ReactJs,Html,Css,JavaScript,Redux,ChakraUi
                    </Text>{" "}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color={"gray"}>
                    MyGlamm was founded in 2015 by Darpan Sanghvi as an at-home
                    beauty salon service. In 2017, it was relaunched as an
                    online cosmetic beauty company in India. In December 2018,
                    it launched its luxury category,
                  </Text>
                  <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                    <Button
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      class="project-deployed-link"
                    >
                      <a
                        href="https://styesup123112.netlify.app"
                        target="_blank"
                      >
                        Deployed
                      </a>
                    </Button>
                    <Button
                      rounded={"full"}
                      color={"green"}
                      className="project-github-link"
                    >
                      <a
                        href="https://github.com/Suraj121704c/-easy-rose-1070/tree/main/paytm-mall"
                        target="_blank"
                        id="project-deployed-link"
                      >
                        GitHub
                      </a>
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1}>
                <Image
                  alt={"StylesUp Image"}
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src={stale}
                />
              </Flex>
            </Stack>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <Stack
              minH={"100vh"}
              direction={{ base: "column", md: "row" }}
              className="project-card"
            >
              <Flex
                p={8}
                flex={1}
                align={"center"}
                justify={"center"}
                className="layer"
              >
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text
                      as={"span"}
                      position={"relative"}
                      className="project-title"
                      _after={{
                        content: "''",
                        width: "full",
                        height: useBreakpointValue({ base: "20%", md: "30%" }),
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "blue.400",
                        zIndex: -1,
                      }}
                    >
                      Gojo Store
                    </Text>
                    <br />{" "}
                    <Text
                      color={"blue.400"}
                      as={"span"}
                      className="project-tech-stack"
                    >
                      Tech-Stack : HTML, CSS, JS
                    </Text>{" "}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color={"gray"}>
                    IAn enthusiast of a particular topic or field. Geeks are
                    “collection” oriented, gathering facts and mementos related
                    to their subject of interest. They are obsessed with the
                    newest, coolest, trendiest things .
                  </Text>
                  <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                    <Button
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      class="project-deployed-link"
                    >
                      <a
                        href="https://majestic-palmier-e45e65.netlify.app"
                        target="_blank"
                      >
                        Deployed
                      </a>
                    </Button>
                    <Button
                      rounded={"full"}
                      color={"green"}
                      className="project-github-link"
                    >
                      <a
                        href="https://github.com/Shahid77137/abundant-coat-8487"
                        target="_blank"
                        id="project-deployed-link"
                      >
                        GitHub
                      </a>
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1}>
                <Image
                  alt={"Gojo Image"}
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src={gojo}
                />
              </Flex>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Projects;
