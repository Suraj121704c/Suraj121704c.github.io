import React from "react";
import styled from "@emotion/styled";
import AnimatedCursor from "react-animated-cursor";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// user defined imports
import MiddleContaner from "../PortfolioComponent2/MiddleContaner";
import LinkContainer from "../PortfolioComponent2/LinkContainer";
import BottomNav from "../PortfolioComponent2/SidebarContent/BottomNav";
import TopResumeButton from "../PortfolioComponent2/Helper/TopResumeButton";
import Messages from "../PortfolioComponent2/Helper/Messages";
import Sidebar from "../PortfolioComponent2/Sidebar";

export default function PortfolioVersion2() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <AnimatedCursor />
      <StickyContainer>
        <TopResumeButton />
      </StickyContainer>

      <MessageStickyContainer>
        <Messages />
      </MessageStickyContainer>

      {/* Theme Toggle Button */}
      <ThemeToggleContainer>
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          size="md"
          borderRadius="full"
          colorScheme={colorMode === "light" ? "gray" : "yellow"}
        />
      </ThemeToggleContainer>

      <MainPortfolioTwoContainer colorMode={colorMode}>
        <div className="sidebarcontainer">
          <Sidebar />
        </div>
        <div className="maincontainer">
          <MiddleContaner />
        </div>
        <div className="linkcontainer">
          <LinkContainer />
        </div>
      </MainPortfolioTwoContainer>

      <StickyContainer>
        <BottomNav />
      </StickyContainer>
    </>
  );
}

const MainPortfolioTwoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 90%;
  margin: 100px auto;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif !important;
  /* font-family: cursive; */

  .sidebarcontainer {
    width: 320px; //28%
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    height: 38rem;
    position: fixed;
    left: 5%;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? "#1a202c" : "white"};
    color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .maincontainer {
    width: 60%;
    height: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    margin-left: 27%;
    overflow-y: auto;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? "#1a202c" : "white"};
    color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .linkcontainer {
    width: 125px; // 8%
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    height: 35rem;
    position: fixed;
    right: 5%;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? "#1a202c" : "white"};
    color: ${({ colorMode }) => (colorMode === "dark" ? "white" : "black")};
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  @media (min-width: 100px) and (max-width: 1000px) {
    width: 100%;

    .sidebarcontainer {
      display: none !important;
    }

    .maincontainer {
      width: 100%;
      margin-left: 0%;
    }

    .linkcontainer {
      display: none !important;
    }
  }
`;

const StickyContainer = styled.div`
  display: none;
  border-radius: 20px;
  overflow: hidden;
  @media (min-width: 100px) and (max-width: 1000px) {
    display: block;
  }
`;

const MessageStickyContainer = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 9999 !important;
`;

const ThemeToggleContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 9999 !important;
`;
