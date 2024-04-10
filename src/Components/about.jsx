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
          <h2 style={{ fontSize: "45px" }}>
            About <span>Me</span>
          </h2>
          <h2 id="user-detail-name">
            I'm <span>Suraj Singh</span> from Prayagraj, UttarPradesh
          </h2>

          <h4 style={{ marginTop: "20px", color: "#61dc14" }}>
            Frontend Developer
          </h4>
          <p
            id="user-detail-intro"
            style={{ letterSpacing: "1px", gap: "5px" }}
          >
            An experienced Frontend Developer specializing in React Native and
            Angular.io with approximately 10 months of hands-on experience.
            Demonstrates a strong learning mindset, adept at crafting scalable
            and responsive websites. Possesses a blend of creative flair and
            analytical acumen, ensuring meticulous attention to detail in
            team-oriented environments.
          </p>
          <button id="resume-button-2" style={{ marginTop: "30px" }}>
            <a
              href={Suraj_Singh_Resume}
              download
              id="resume-link-2"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1zysgnoKcfhEVe9rid1JWi5u2geTiHDt3/view?usp=sharing"
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
