import React from "react";
import Sidebar from "../PortfolioComponent2/Sidebar";
import styled from "@emotion/styled";
import MiddleContaner from "../PortfolioComponent2/MiddleContaner";
import LinkContainer from "../PortfolioComponent2/LinkContainer";
import BottomNav from "../PortfolioComponent2/SidebarContent/BottomNav";
import AnimatedCursor from "react-animated-cursor";
import TopResumeButton from "../PortfolioComponent2/Helper/TopResumeButton";
import Messages from "../PortfolioComponent2/Helper/Messages";

export default function PortfolioVersion2() {
  return (
    <>
      {/* <AnimatedCursor /> */}
      <StickyContainer>
        <TopResumeButton />
      </StickyContainer>

      <MessageStickyContainer>
        <Messages />
      </MessageStickyContainer>

      <MainPortfolioTwoContainer>
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
    height: 35rem;
    position: fixed;
    left: 5%;
    background-color: white;
    border-radius: 20px;
  }

  .maincontainer {
    width: 60%;
    height: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    margin-left: 27%;
    overflow-y: auto;
    background-color: white;
    border-radius: 20px;
  }

  .linkcontainer {
    width: 125px; // 8%
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    height: 35rem;
    position: fixed;
    right: 5%;
    background-color: white;
    border-radius: 20px;
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
