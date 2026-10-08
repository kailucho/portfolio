import React from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";
import SystemTrace from "../ui/SystemTrace";
import "./selected-work.css";

const CASE_STUDY_FIELDS = [
  ["context", "Context"],
  ["myRole", "Role"],
  ["technicalChallenges", "Technical challenge"],
  ["decisions", "Key decisions"],
  ["implementation", "Implementation"],
  ["learnings", "What it reinforced"],
];

const ProjectLinks = ({ project }) => (
  <div className="project-links">
    {project.githubUrl && (
      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        GitHub <FiArrowUpRight aria-hidden="true" />
      </a>
    )}
    {project.demoUrl && (
      <a href={project.demoUrl} target="_blank" rel="noreferrer">
        Live product <FiArrowUpRight aria-hidden="true" />
      </a>
    )}
  </div>
);

const CaseStudy = ({ project, label = "Open engineering notes" }) => (
  <details className="case-study">
    <summary>
      <span>{label}</span>
      <FiPlus aria-hidden="true" />
    </summary>
    <div className="case-study__body">
      {project.confidentialityNote && <p className="case-study__note">{project.confidentialityNote}</p>}
      {CASE_STUDY_FIELDS.map(([key, title]) =>
        project[key] ? (
          <div className="case-study__section" key={key}>
            <h4>{title}</h4>
            <p>{project[key]}</p>
          </div>
        ) : null
      )}
    </div>
  </details>
);

const SelectedWork = () => {
  const flagship = projects.find(({ id }) => id === "dota-ai-coach");
  const product = projects.find(({ id }) => id === "supervisa-360");
  const additional = projects.filter(({ id }) =>
    ["dota-plus-free", "simulador-credito-telegram"].includes(id)
  );

  return (
    <section id="work" className="selected-work section-paper">
      <div className="site-shell">
        <SectionIntro
          index="01"
          eyebrow="Selected work"
          title="Systems with a reason to exist."
          description="The strongest work gets the most space. Architecture, constraints, and decisions come before a list of tools."
        />

        <Reveal className="flagship">
          <div className="flagship__story">
            <div className="project-kicker">
              <span>Flagship / AI systems</span>
              <span>Personal R&D</span>
            </div>
            <h3>{flagship.title}</h3>
            <p className="flagship__lede">{flagship.summary}</p>

            <div className="flagship__story-grid">
              <div>
                <span className="meta-label">Problem</span>
                <p>{flagship.problem}</p>
              </div>
              <div>
                <span className="meta-label">Result</span>
                <p>{flagship.results}</p>
              </div>
            </div>

            <p className="tech-line">{flagship.technologies.join("  /  ")}</p>
            <ProjectLinks project={flagship} />
          </div>

          <div className="flagship__system">
            <div className="flagship__system-header">
              <span>Architecture trace</span>
              <span>real-time / parity tested</span>
            </div>
            <SystemTrace nodes={["GSI feed", "Match state", "Feature engine", "Recommend", "Overlay"]} />
            <div className="flagship__facts">
              {flagship.metrics.slice(0, 3).map((metric, index) => (
                <div key={metric}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{metric}</p>
                </div>
              ))}
            </div>
          </div>
          <CaseStudy project={flagship} />
        </Reveal>

        <Reveal className="product-feature">
          <div className="project-kicker">
            <span>02 / Production product</span>
            <span>Real operators</span>
          </div>
          <div className="product-feature__grid">
            <div>
              <h3>{product.title}</h3>
              <p className="product-feature__lede">{product.summary}</p>
            </div>
            <div className="product-feature__decision">
              <span className="meta-label">Engineering decision</span>
              <p>{product.decisions}</p>
            </div>
          </div>
          <div className="product-feature__footer">
            <p className="tech-line">{product.technologies.join("  /  ")}</p>
            <ProjectLinks project={product} />
          </div>
          <CaseStudy project={product} />
        </Reveal>

        <div className="project-index" aria-label="Additional selected projects">
          <div className="project-index__heading">
            <span>Additional selected projects</span>
            <span>03—04</span>
          </div>
          {additional.map((project, index) => (
            <Reveal as="article" className="project-row" key={project.id}>
              <span className="project-row__number">{String(index + 3).padStart(2, "0")}</span>
              <div className="project-row__title">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.summary}</p>
              <div className="project-row__actions">
                <ProjectLinks project={project} />
                <CaseStudy project={project} label="Engineering notes" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
