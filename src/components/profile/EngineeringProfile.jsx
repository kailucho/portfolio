import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../../data/profile";
import { engineeringPrinciples } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";
import "./engineering-profile.css";

const EngineeringProfile = () => (
  <section id="profile" className="engineering-profile section-ink">
    <div className="site-shell">
      <SectionIntro
        index="04"
        eyebrow="Approach"
        title="How I think about the work."
        description="The hero says what I build. This section explains the engineering judgment behind it."
        inverse
      />

      <div className="engineering-profile__grid">
        <Reveal className="engineering-profile__statement">
          <p>
            My strongest work sits across the full path from product intent to production
            behavior: architecture, durable data rules, model integration, observability, and the
            interfaces people actually use. My AI work includes trained and calibrated models,
            tool-calling LLM systems, and a production Computer Vision service.
          </p>
          <div className="engineering-profile__meta">
            <span>{profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="principles">
          {engineeringPrinciples.map((principle) => (
            <Reveal as="article" className="principle" key={principle.number}>
              <span>{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EngineeringProfile;
