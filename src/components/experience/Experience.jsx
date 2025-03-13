import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";

function Experience() {
  const frontendData = [
    { title: "React", level: "Expert" },
    { title: "Redux", level: "Advanced" },
    { title: "Next.js", level: "Advanced" },
    { title: "TypeScript", level: "Advanced" },
    { title: "JavaScript", level: "Expert" },
    { title: "HTML5", level: "Expert" },
    { title: "CSS3", level: "Expert" },
    { title: "Tailwind CSS", level: "Advanced" },
  ];

  const backendData = [
    { title: "Node.js", level: "Expert" },
    { title: "NestJS", level: "Advanced" },
    { title: "Express.js", level: "Advanced" },
    { title: "GraphQL", level: "Advanced" },
    { title: "MongoDB", level: "Advanced" },
    { title: "MySQL", level: "Expert" },
    { title: "Serverless (AWS/Azure)", level: "Advanced" },
  ];

  return (
    <section id="experience">
      <h5>Skills & Expertise</h5>
      <h2>Professional Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendData.map(({ title, level }) => (
              <article key={title} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{title}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendData.map(({ title, level }) => (
              <article key={title} className="experience__details">
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
