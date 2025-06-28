import React, { useEffect, useRef } from "react";
import HeaderSection from "../Helper/HeaderSection";
import styled from "@emotion/styled";
// import Typed from "typed.js";

export default function About() {
  // const typedElementRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: ["Student", "Programmer", "Developer"],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 1000,
  //     loop: true,
  //   };

  //   const typed = new Typed(typedElementRef.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <AboutContainerStyled id="About">
      <HeaderSection title={"About"} />

      <div className="about_content">
        {/* <div
          className="multiple-text"
          ref={typedElementRef}
        ></div> */}
        <p>
          <strong>
            A Mobile App Developer with over 3 years of hands-on experience
          </strong>{" "}
          in building user-friendly and scalable mobile applications using{" "}
          <strong>React Native</strong>. Proficient in{" "}
          <strong>TypeScript</strong> for writing robust and maintainable code.
          Skilled in <strong>Redux</strong> for state management,{" "}
          <strong>Firebase</strong> for backend integration (including
          authentication, notifications, and deep linking), and creating
          responsive UIs using modern libraries. Experienced in handling
          background operations, integrating REST APIs, and working with{" "}
          <strong>sockets</strong> for real-time features. Possesses a strong
          learning mindset and a passion for building intuitive,
          high-performance apps. Combines creativity with problem-solving
          skills, pays close attention to detail, and thrives in collaborative,
          fast-paced team environments. Looking forward to joining a progressive
          organization with opportunities to work on challenging projects.
        </p>
        <br />
        <p>
          With a problem-solving mindset and strong collaboration skills, I'm
          continuously improving and excited to keep growing as a competent
          professional in a dynamic tech environment.
        </p>
      </div>
    </AboutContainerStyled>
  );
}

const AboutContainerStyled = styled.div`
  .about_content {
    text-align: start;
    color: #75797c;
    font-size: 1.05rem;
  }
`;
