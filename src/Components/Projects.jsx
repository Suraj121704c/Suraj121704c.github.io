import React from "react";
import geek from "../assests/pirate.png";
import lens from "../assests/lenskart.png";
import cal from "../assests/cal.png";
import { SiNetlify } from "react-icons/si";
import gojo from "../assests/gojo.png";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Latest </span>Projects
          </h2>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={lens} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                GlassWorld was founded in 2022 by Darpan Sanghvi as an at-home
                beauty salon service. In 2023, it was relaunched as an online
                cosmetic goggles company in India. In December 2023, it launched
                its luxury category,
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, Chakra
              </p>
              <div className="project-deployed-link">
                <a href="https://glassworldheaven.netlify.app/" target="_blank">
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Shahid77137/abundant-coat-8487"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={geek} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                IAn enthusiast of a particular topic or field. Geeks are
                “collection” oriented, gathering facts and mementos related to
                their subject of interest. They are obsessed with the newest,
                coolest, trendiest things .
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML , CSS, JS</p>
              <div className="project-deployed-link">
                <a
                  href="https://effulgent-syrniki-67b038.netlify.app/index.html"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Shahid77137/abundant-coat-8487"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={cal} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                MyGlamm was founded in 2015 by Darpan Sanghvi as an at-home
                beauty salon service. In 2017, it was relaunched as an online
                cosmetic beauty company in India. In December 2018, it launched
                its luxury category,
              </p>
              <p className="project-tech-stack">Tech-Stack</p>
              <div className="project-deployed-link">
                <a
                  href="https://admirable-panda-d420f4.netlify.app/"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Shahid77137/gleaming-experience-7292"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={gojo} alt="" />
            <div className="layer">
              <h5 className="project-title">Visula Design</h5>
              <p className="project-description">
                IAn enthusiast of a particular topic or field. Geeks are
                “collection” oriented, gathering facts and mementos related to
                their subject of interest. They are obsessed with the newest,
                coolest, trendiest things .
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div class="project-deployed-link">
                <a
                  href="https://majestic-palmier-e45e65.netlify.app"
                  target="_blank"
                >
                  <i>
                    <SiNetlify />
                  </i>
                </a>
              </div>
              <div className="project-github-link">
                <a
                  href="https://github.com/Shahid77137/abundant-coat-8487"
                  target="_blank"
                  id="project-deployed-link"
                >
                  <i>
                    <AiFillGithub />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
