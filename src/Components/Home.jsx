import React from "react";
import CV from "../assests/cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hello</span>
            <span className="two">I'm</span>
          </div>
          <h1 id="user-detail-name">Suraj Singh</h1>
          <h3 id="user-detail-skill">
            Mern <span>Developer.</span>
          </h3>

          <br />
          <button id="resume-button-2">
            <a
              href={CV}
              download="pdf"
              id="resume-link-2"
            >
              <span>
                <i>
                  <AiOutlineDownload />
                </i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
