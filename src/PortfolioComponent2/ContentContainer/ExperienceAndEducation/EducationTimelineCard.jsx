import styled from "@emotion/styled";
import React from "react";

export default function EducationTimelineCard({ data }) {
  return (
    <EducationExperienceTimelineStyled>
      <ul>
        {data &&
          data.map((ele, i) => (
            <li
              style={{
                "--accent-color": `${ele.color}`,
                animationDelay: `${i * 0.2}s`,
              }}
              key={i}
              className="timeline-item"
            >
              <div class="date">{ele.date}</div>
              <div class="title">{ele.title || ele.instituteName}</div>
              <div class="descr">{ele.subtitle || ele.courseName}</div>
            </li>
          ))}
      </ul>
    </EducationExperienceTimelineStyled>
  );
}

const EducationExperienceTimelineStyled = styled.div`
  ul {
    --col-gap: 2rem;
    --row-gap: 2rem;
    --line-w: 0.25rem;
    display: grid;
    grid-template-columns: var(--line-w) 1fr;
    grid-auto-columns: max-content;
    column-gap: var(--col-gap);
    list-style: none;
    width: min(60rem, 90%);
    margin-inline: auto;
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  /* line */
  ul::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 20;
    background: linear-gradient(180deg, #41516c 0%, #f94449 100%);
    border-radius: calc(var(--line-w) / 2);
    animation: lineGrow 1.5s ease-out;
    transform: translateZ(-10px);
  }

  @keyframes lineGrow {
    from {
      height: 0;
      transform: translateZ(-10px) scaleY(0);
    }
    to {
      height: 100%;
      transform: translateZ(-10px) scaleY(1);
    }
  }

  /* columns*/

  /* row gaps */
  ul li:not(:last-child) {
    margin-bottom: var(--row-gap);
  }

  /* card */
  ul li {
    grid-column: 2;
    --inlineP: 1.5rem;
    margin-inline: var(--inlineP);
    grid-row: span 2;
    display: grid;
    grid-template-rows: min-content min-content min-content;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px, 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    opacity: 0;
    transform: translateY(30px) rotateX(15deg);
    animation: slideInUp 0.8s ease-out forwards;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
    position: relative;
  }

  ul li:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg) translateZ(20px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px,
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 0 30px rgba(var(--accent-color-rgb, 78, 205, 196), 0.3);
  }

  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
  }

  /* date */
  ul li .date {
    --dateH: 1.5rem;
    height: var(--dateH);
    margin-inline: calc(var(--inlineP) * -1);

    text-align: center;
    background-color: var(--accent-color);

    color: white;
    font-size: 1rem;
    font-weight: 700;

    display: grid;
    place-content: center;
    position: relative;

    border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
    transition: all 0.3s ease;
    transform-style: preserve-3d;
  }

  ul li:hover .date {
    transform: scale(1.05) translateZ(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  /* date flap */
  ul li .date::before {
    content: "";
    width: var(--inlineP);
    aspect-ratio: 1;
    background: var(--accent-color);
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
    position: absolute;
    top: 100%;

    clip-path: polygon(0 0, 100% 0, 0 100%);
    right: 0;
    transform: translateZ(-5px);
    transition: all 0.3s ease;
  }

  ul li:hover .date::before {
    transform: translateZ(-5px) rotateX(10deg);
  }

  /* circle */
  ul li .date::after {
    content: "";
    position: absolute;
    width: 1rem;
    aspect-ratio: 1;
    background: var(--bgColor);
    border: 0.3rem solid var(--accent-color);
    border-radius: 50%;
    top: 50%;

    transform: translate(50%, -50%) translateZ(15px);
    right: calc(100% + var(--col-gap) + var(--line-w) / 2);
    animation: pulse 2s infinite;
    box-shadow: 0 0 20px rgba(var(--accent-color-rgb, 78, 205, 196), 0.5);
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translate(50%, -50%) translateZ(15px) scale(1);
      opacity: 1;
    }
    50% {
      transform: translate(50%, -50%) translateZ(15px) scale(1.2);
      opacity: 0.8;
    }
  }

  /* title descr */
  ul li .title,
  ul li .descr {
    background: var(--bgColor);
    position: relative;
    padding-inline: 1.5rem;
    transform-style: preserve-3d;
  }
  ul li .title {
    overflow: hidden;
    padding-block-start: 1.5rem;
    padding-block-end: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    transform: translateZ(5px);
  }
  ul li .descr {
    padding-block-end: 1.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    transform: translateZ(3px);
  }

  ul li:hover .title,
  ul li:hover .descr {
    color: var(--accent-color);
    transform: translateZ(10px);
  }

  /* shadows */
  ul li .title::before,
  ul li .descr::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    left: 50%;
    border-radius: 50%;
    filter: blur(4px);
    transform: translate(-50%, 50%) translateZ(-10px);
    transition: all 0.3s ease;
  }

  ul li:hover .title::before,
  ul li:hover .descr::before {
    transform: translate(-50%, 50%) translateZ(-20px) scale(1.2);
    filter: blur(6px);
  }

  ul li .title::before {
    bottom: calc(100% + 0.125rem);
  }

  ul li .descr::before {
    z-index: -1;
    bottom: 0.25rem;
  }

  @media (min-width: 40rem) {
    ul {
      grid-template-columns: 1fr var(--line-w) 1fr;
    }
    ul::before {
      grid-column: 2;
    }
    ul li:nth-child(odd) {
      grid-column: 1;
    }
    ul li:nth-child(even) {
      grid-column: 3;
    }

    /* start second card */
    ul li:nth-child(2) {
      grid-row: 2/4;
    }

    ul li:nth-child(odd) .date::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      left: 0;
    }

    ul li:nth-child(odd) .date::after {
      transform: translate(-50%, -50%) translateZ(15px);
      left: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }
    ul li:nth-child(odd) .date {
      border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
    }
  }
`;
