import React from "react";
import { capabilityDomains } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";
import "./capabilities.css";

const Capabilities = () => (
  <section id="capabilities" className="capabilities section-ink">
    <div className="site-shell">
      <SectionIntro
        index="02"
        eyebrow="Engineering profile"
        title="Capabilities before tools."
        description="A senior engineering profile organized by the problems I can own—not by a wall of logos."
        inverse
      />

      <div className="capabilities__layout">
        <aside className="capabilities__aside">
          <p>
            I work across the boundary where product software becomes an AI system: data, models,
            service architecture, delivery, and the operational details between them.
          </p>
          <span>Software / AI / Systems</span>
        </aside>
        <div className="capabilities__list">
          {capabilityDomains.map((domain) => (
            <Reveal as="article" className="capability" key={domain.number}>
              <span className="capability__number">{domain.number}</span>
              <div className="capability__body">
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <p className="tech-line">{domain.technologies.join("  /  ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Capabilities;
