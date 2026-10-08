import React from "react";
import { experience } from "../../data/experience";
import { education } from "../../data/education";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";
import SystemTrace from "../ui/SystemTrace";
import "./career.css";

const Career = () => {
  const productionAi = projects.find(({ id }) => id === "utp-facial-recognition");

  return (
    <section id="experience" className="career section-paper">
      <div className="site-shell">
        <SectionIntro
          index="03"
          eyebrow="Professional experience"
          title="Seven years of systems in context."
          description="Chronology, ownership, and the decisions that mattered—without turning employment history into another card grid."
        />

        <div className="career__timeline">
          {experience.map((entry, index) => (
            <Reveal as="article" className="career-entry" key={entry.id}>
              <div className="career-entry__rail">
                <span>{entry.period}</span>
                <span className="career-entry__marker" aria-hidden="true" />
              </div>
              <div className="career-entry__role">
                <span>{entry.organization}</span>
                <h3>{entry.role}</h3>
                <p className="tech-line">{entry.technologies.join("  /  ")}</p>
              </div>
              <ul className="career-entry__highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              {index === 0 && (
                <div className="production-ai">
                  <div className="production-ai__intro">
                    <p className="eyebrow">Production AI system / UTP</p>
                    <h4>{productionAi.title}</h4>
                    <p>{productionAi.summary}</p>
                  </div>
                  <SystemTrace nodes={["image", "quality", "face model", "service", "portal"]} compact />
                  <div className="production-ai__result">
                    <span className="meta-label">Why it matters</span>
                    <p>{productionAi.learnings}</p>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <div className="career__education">
          <span className="career__education-label">Continuous learning</span>
          {education.map((item) => (
            <div className="career__education-content" key={item.id}>
              <div>
                <span>{item.status}</span>
                <h3>{item.title}</h3>
              </div>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
