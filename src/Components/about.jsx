import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
        id="about"
        className="about section"
      >
        About me
      </Text>
      <Flex
        height={{ base: "100%", md: "60vh", lg: "100%" }}
        width="85%"
        margin="auto"
        id="about"
        flexDir={{ base: "column", md: "row", lg: "row" }}
        alignItems={"center"}
      >
        <Box
          data-aos="fade-right"
          width={{ base: "100%", md: "50%", lg: "35%" }}
          marginTop={"30px"}
        >
          <abbr title="Md Faizan! A Full Stack Developer.">
            <Image
              className="home-img"
              margin="auto"
              // border="1px solid grey"
              borderRadius="50%"
              boxShadow={"-2px -2px 5px #fff, 2px 2px 5px #babecc"}
              src="https://i.ibb.co/zG6mT2x/unnamed.jpg"
              // src="https://avatars.githubusercontent.com/u/106812942?s=400&u=321d027478cef5cefe38c9a0237b7f260d6277ed&v=4"
            />
          </abbr>

          {/* https://avatars.githubusercontent.com/u/106812942?v=4 */}
        </Box>
        <Box
          padding={{ base: "0px", md: "40px", lg: "50px" }}
          marginTop={{ base: "30px", md: "20px", lg: "30px" }}
          alignItems="center"
          alignContent="center"
          height="100%"
          width={{ base: "100%", md: "50%", lg: "65%" }}
          fontSize={"1.3rem"}
          data-aos="fade-left"
        >
          <Text id="user-detail-intro" textAlign={"start"}>
            A Full-Stack Web Developer specializing in MERN Stack with good
            proficiency in HTML, CSS, JS, ReactJS, Redux, NodeJS, ExpressJS,
            MongoDB, Data Structures and Algorithms. Has a Problem-Solving
            mindset and the ability to perform well in a team.
            <br />
            <br />
            Acquired 1200+ hours of coding and hands-on experience in cloning
            websites. Looking forward to working as an accountable and competent
            professional in an exciting tech organization.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default About;
//about
