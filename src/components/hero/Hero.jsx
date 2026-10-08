import React from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import portrait from "../../assets/me.png";
import cv from "../../assets/cv.pdf";
import { profile } from "../../data/profile";
import { proofPoints } from "../../data/site";
import Reveal from "../ui/Reveal";
import SystemTrace from "../ui/SystemTrace";
import "./hero.css";

const Hero = () => (
  <header id="home" className="hero">
    <div className="site-shell hero__grid">
      <Reveal className="hero__content">
        <p className="hero__identity">
          <span>{profile.name}</span>
          <span>{profile.headline}</span>
        </p>
        <h1>
          AI systems,
          <br />
          engineered past
          <br />
          <em>the demo.</em>
        </h1>
        <div className="hero__positioning">
          <p>{profile.shortBio}</p>
          <div className="hero__actions">
            <a className="button button--signal" href="#work">
              View selected work <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href={cv} download>
              Download CV <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal className="hero__visual" delay={0.08}>
        <div className="hero__visual-grid" aria-hidden="true" />
        <div className="hero__portrait-frame">
          <img src={portrait} alt="Luijhy Guerra" width="500" height="500" />
        </div>
        <p className="hero__visual-note">
          <span>System trace / 001</span>
          Production-minded software + applied AI
        </p>
        <SystemTrace nodes={["ingest", "model", "verify", "ship"]} compact inverse />
      </Reveal>
    </div>

    <div className="site-shell hero__proof" aria-label="Selected evidence">
      {proofPoints.map(({ value, label }, index) => (
        <div className="hero__proof-item" key={label}>
          <span className="hero__proof-index">{String(index + 1).padStart(2, "0")}</span>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  </header>
);

export default Hero;
