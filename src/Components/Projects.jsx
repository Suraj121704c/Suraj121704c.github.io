import React from "react";
import { Box, Button, SimpleGrid, useColorMode } from "@chakra-ui/react";
import gojo from "../assests/gojo.png";
import pirate from "../assests/pirate.png";
import style from "../assests/stylesup.png";
import frames from "../assests/lenskart.png";
import { FaGithub, FaEye } from "react-icons/fa";
import TypeWriter from "./TypeWriter";



// const Projects = () => {
//   return (
//     <Box className="nav-link projects" id="nav-link-projects">
//       <div
//         id="projects"
//         className="main_container"
//         style={{
//           // backgroundColor: "#edf2f8",
//           // backgroundColor: "#2c1e4a",
//           backgroundColor: "var(--bg-color)",
//           color: "white",
//         }}
//       >
//         <div className="project_container">
//           <div className="project_heading">
//             <h2 className="title">Projects</h2>
//           </div>

//           <div className="project_grid">
//             <SimpleGrid
//               columns={[1, 1, 2]}
//               spacing={100}
//             >
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={frames} alt="Learning management" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Frames Lobbey</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       This is one of the best project that I have made. This whole
//                       website divides in two parts admin and user page. This whole
//                       website is created by only in 4 days.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> JavaScript, HTML, CSS, React,
//                       ChakraUi
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Suraj121704c/excellent-noise-5475/tree/main/glassworld"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://glassworldheaven.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={style} alt="Learning managemen" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Styles Up</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       An E-Commerce Website : Clone of Paytm Mall . It is group
//                       project created by four peopls and I was the team Lead.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> React, JavaScript, HTML, CSS,
//                       Redux, ChakraUi
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Suraj121704c/-easy-rose-1070/tree/main/paytm-mall"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://styesup123112.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={gojo} alt="Learning managemen" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Gojo Store</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       Its an Indivisual Project completed withing 4 days and this
//                       is my first project in Masai School.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> JavaScript, HTML, CSS
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Suraj121704c/divine-eggnog-8153"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://glistening-sherbet-5d15f0.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//               <Box>
//                 <div
//                   className="project_box project-card"
//                   style={{
//                     backgroundColor: "#1a202c",
//                   }}
//                 >
//                   <div className="project_image">
//                     <img src={pirate} alt="Learning managemen" />
//                   </div>

//                   <div className="project_name project-title">
//                     <h2>Pirated Store</h2>
//                   </div>
//                   <div className="project_desc project-description">
//                     <p>
//                       An Platform that helps in buying products. This website is a
//                       clone of geeksbuying. Created by the group of 4.
//                     </p>
//                   </div>
//                   <div className="project_tech_stack project-tech-stack">
//                     <h5>
//                       <span>Tech Stack :</span> Advance JavaScript, HTML, CSS
//                     </h5>
//                   </div>
//                   <div className="project_icon">
//                     <div className="github_link project-github-link">
//                       <a
//                         href="https://github.com/Shahid77137/abundant-coat-8487_"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                     <div className="deploy_link project-deployed-link">
//                       <a
//                         href="https://nimble-crostata-869bd1.netlify.app/"
//                         rel="noopener norefferer"
//                         target="_blank"
//                       >
//                         <FaEye />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </Box>
//             </SimpleGrid>
//           </div>
//         </div>
//       </div>
//     </Box>
//   );
// };
// export default Projects;

// import React from "react";
import geek from "../assests/pirate.png";
import lens from "../assests/lenskart.png";
import stale from "../assests/stylesup.png";
import { SiNetlify } from "react-icons/si";
// import gojo from "../assests/gojo.png";
import { AiFillGithub } from "react-icons/ai";

const typeWriter1 = ["GlassWorld"];
const typeWriter2 = ["Styles Up"];
const typeWriter3 = ["Gojo Store"];
const typeWriter4 = ["Pirated Store"];


const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="main-text">
          <h2>
            <span>Projects</span>
          </h2>
          <p style={{ marginTop: "2%" }}>
            Some of the things that i have built...
          </p>
        </div>

        <div className="nav-link projects" id="nav-link-projects">
          <div className="project-card">
            <img src={frames} alt="" />
            <div className="layer">
              <h5 className="project-title"><TypeWriter data={typeWriter1} /></h5>
              <p className="project-description">
                GlassWorld is a online glass shop inspired by lenskart.com, that
                follows the latest trends, aimed at all the age group peoples of
                india.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : REACT, JS, HTML, CSS, CHAKRA UI,CONTEXT-API
              </p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a
                    href="https://glassworldheaven.netlify.app/"
                    target="_blank">
                    <i>
                      <FaEye />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Suraj121704c/excellent-noise-5475"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={style} alt="" />
            <div className="layer">
              <h5 className="project-title"><TypeWriter data={typeWriter2} /></h5>
              <p className="project-description">
                An E-Commerce Website : Clone of Paytm Mall . It is group
                project created by four peopls and I was the team Lead. We
                created this website in 4 days time period.
              </p>
              <p className="project-tech-stack">
                Tech-Stack : HTML , CSS, JS, REACT, CHAKRA UI, REDUX
              </p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a href="https://styesup123112.netlify.app/" target="_blank">
                    <i>
                      <FaEye />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Suraj121704c/-easy-rose-1070"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={gojo} alt="" />
            <div className="layer">
              <h5 className="project-title"><TypeWriter data={typeWriter3} /></h5>
              <p className="project-description">
                The Project is inspired from Yoox which is a major foreign
                fashion e-commerce company.
              </p>
              <p className="project-tech-stack">Tech-Stack : HTML, CSS, JS</p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a
                    href="https://majestic-palmier-e45e65.netlify.app/"
                    target="_blank">
                    <i>
                      <FaEye />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Suraj121704c/divine-eggnog-8153"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={pirate} alt="" />
            <div className="layer">
              <h5 className="project-title"><TypeWriter data={typeWriter4} /></h5>
              <p className="project-description">
                An Platform that helps in buying products. This website is a
                clone of geeksbuying. Created by the group of 4..
              </p>
              <p className="project-tech-stack">
                Tech-Stack : HTML, CSS, Advance Js
              </p>
              <div id="project-links">
                <div className="project-deployed-link">
                  <a
                    href="https://nimble-crostata-869bd1.netlify.app/"
                    target="_blank">
                    <i>
                      <FaEye />
                    </i>
                  </a>
                </div>
                <div className="project-github-link">
                  <a
                    href="https://github.com/Shahid77137/abundant-coat-8487"
                    target="_blank"
                    id="project-deployed-link">
                    <i>
                      <FaGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
