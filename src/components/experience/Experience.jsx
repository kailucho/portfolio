import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";
function Experience() {
  const frontendData = [
    { title: "React", level: "Experienced" },
    { title: "Redux", level: "Intermediate" },
    { title: "Typescript", level: "Intermediate" },
    { title: "Javascript", level: "Experienced" },
    { title: "HTML", level: "Experienced" },
    { title: "CSS", level: "Experienced" },
    { title: "Bootstrap", level: "Experienced" },
    { title: "Tailwind", level: "Intermediate" },
  ];
  const backendData = [
    { title: "Node JS", level: "Experienced" },
    { title: "NestJS", level: "Intermediate" },
    { title: "MySQL", level: "Experienced" },
    { title: "GraphQL", level: "Intermediate" },
    { title: "MongoDB", level: "Intermediate" },
    { title: "PHP", level: "Intermediate" },
    { title: "Python", level: "Experienced" },
  ];
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendData.map(({ title, level }) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{title}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendData.map(({ title, level }) => (
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{title}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
