import React from "react";
import me from "../assests/photo.png";
import CV from "../assests/cv.pdf";

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
              href={CV}
              download
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Imnhhw_y6CtRpNZUgv3uLlpNxmULVHqK/view?usp=share_link"
                )
              }
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
