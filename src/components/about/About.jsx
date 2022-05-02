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
      <div>
        <h5>Hello I'm</h5>
        <h1>Luijhy Guerra</h1>
        <h5 className="text-ligth">React Developer</h5>
      </div>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <p>
          Hello, I am a React programmer with more than 3 years of experience
          known for my ability to face new challenges. I feel trained in the
          JavaScript language and provide solutions to the challenges that
          arise, as well as good customer service to capture their needs.
        </p>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default About;
