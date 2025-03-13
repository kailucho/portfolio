import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";
// import ME from "../../assets/me-about.jpg";
import CTA from "./CTA";

const About = () => {
  return (
    <section id="about">
      <div className="about__header">
        <h5>Hi, I'm</h5>
        <h1>Luijhy Guerra</h1>
        <h5 className="text-light">React Developer & Frontend Engineer</h5>
      </div>
      <h5>Discover More</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <p>
          I am a dedicated React developer with over 5 years of experience in building robust and scalable web applications. Throughout my career, I have collaborated with international teams to deliver innovative solutions using modern technologies like React, Redux, Next.js, and TypeScript.
        </p>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years in the Industry</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default About;
