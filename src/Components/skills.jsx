import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="main-text">
          <h2>
            <span>My </span>Skills
          </h2>
          <p style={{ marginTop: "10px" }}>What I am Expert In ?</p>
        </div>

        <div className="nav-link skills" id="skills-part">
          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" className="bx bxl-java"></i> */}
              <FaReact style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              React
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" className="bx bxl-javascript"></i> */}
              <TbBrandJavascript style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              JavaScript
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" className="bx bxl-html5"></i> */}
              <AiOutlineHtml5 style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              HTML
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" clclassNameass="bx bxl-css3"></i> */}
              <TbBrandCss3 style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              CSS
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" className="bx bx-sushi"></i> */}
              <SiRedux style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              Redux
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" className="bx bxl-spring-boot"></i> */}
              <DiNodejs style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              Node JS
            </h3>
          </div>
          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" className="fas fa-database"></i> */}
              <SiTypescript style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              Typescript
            </h3>
          </div>

          <div className="skills-card">
            <div className="skills-card-img">
              {/* <i style="font-size: 100px;" className="fa-solid fa-cubes"></i> */}
              <TfiWrite style={{ height: "50px", width: "50px" }} />
            </div>
            <h3 className="skills-card-name" style={{ color: "#61dc14" }}>
              DSA
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
