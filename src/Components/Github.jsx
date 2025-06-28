import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Card, Flex, Image, Link } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <>
      <h1 className="proj-title" style={{ fontSize: "3rem", marginTop: "5px" }}>
        Github Status
      </h1>
      <Box>
        <Box
          width={["330px", "450px", "870px"]}
          margin="auto"
          marginBottom="30px"
          // border={"1px solid black"}
        >
          <Card
            p={"15px"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <GitHubCalendar
              username="mdfaizan973"
              className="react-activity-calendar"
            />
          </Card>
        </Box>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          margin={"1rem"}
          align={"center"}
          justify={"center"}
          gap="7"
        >
          <Box>
            <Link href="https://github.com/mdfaizan973" />
            <Image
              data-aos="fade-right"
              id="github-streak-stats"
              width="450px"
              src="https://github-readme-streak-stats.herokuapp.com/?user=mdfaizan973&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
            />
          </Box>
          <Box>
            <Link href="https://github.com/mdfaizan973" />
            <Image
              data-aos="fade-up"
              id="github-top-langs"
              width="450px"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mdfaizan973&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
            />
          </Box>
          <Box>
            <Link href="https://github.com/mdfaizan973" />
            <Image
              data-aos="fade-left"
              width="450px"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=mdfaizan973&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Github;
