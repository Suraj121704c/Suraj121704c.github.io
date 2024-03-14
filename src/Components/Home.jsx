import React from "react";
import Suraj_Singh_Resume from "../assests/Suraj_Singh_Resume.pdf";
import TypeWriter from "./TypeWriter";

const typeWriter = ["Singh"];
const typeWriter2 = ["I'm A Frontend Developer...", "Ready to Work with you..."];

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="nav-link home">
          <div className="slide">
            <span className="one">Hello</span>
            <span className="two">I'm</span>

            <h1 id="user-detail-name" style={{marginTop : "15px"}}> 
              Suraj <TypeWriter data={typeWriter} />
            </h1>
          </div>
          <h3 id="user-detail-skill">
            <TypeWriter data={typeWriter2} />
          </h3>

          <br />
          {/* <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={Suraj_Singh_Resume}
              download="Suraj_Singh_Resume.pdf"
              id="resume-link-2"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1g2tkgrCUQsSTUqDaNkt3NtrajM-CyGiM/view?usp=share_link"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default Home;
// home page
