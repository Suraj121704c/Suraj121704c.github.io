import React from "react";
import me from "../assests/Suraj_Singh.jpg";
import Suraj_Singh_Resume from "../assests/Suraj_Singh_Resume.pdf";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about-img">
          <img className="home-img" src={me} alt="home-image" />
        </div>
        <div className="nav-link about">
          <h1>
            About <span>Me</span>
          </h1>
          <h2 id="user-detail-name">
            I'm <span>Suraj Singh</span> from Prayagraj, UttarPradesh
          </h2>

          <h4>Mern Developer</h4>
          <p id="user-detail-intro" style={{ letterSpacing: "1px" }}>
            An enthusiastic Mern Developer with excellent hands-on experience in
            developing scalable websites and application using a wide range of
            front-end and back-end skills like HTML, CSS, JavaScript, React,
            Redux and Node Js. Highly skilled in design, development and
            implementation of functional specifications, Ready for taking
            challenging roles..
          </p>
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={Suraj_Singh_Resume}
              download
              id="resume-link-2"
              target = "_blank"
              // onClick={() =>
              //   window.open(
              //     "https://drive.google.com/file/d/1g2tkgrCUQsSTUqDaNkt3NtrajM-CyGiM/view?usp=share_link"
              //   )
              // }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;

// onClick={() =>
//   window.open(
//     "https://drive.google.com/file/d/1g2tkgrCUQsSTUqDaNkt3NtrajM-CyGiM/view?usp=share_link"
//   )
// }