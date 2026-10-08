import React from "react";
import { profile } from "../../data/profile";
import "./footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-shell site-footer__grid">
      <a className="site-footer__brand" href="#home">LG / 26</a>
      <p>Senior Software Engineer — AI Systems</p>
      <div className="site-footer__links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={`mailto:${profile.email}`}>Email ↗</a>
      </div>
      <p className="site-footer__copyright">© {new Date().getFullYear()} Luijhy Guerra</p>
    </div>
  </footer>
);

export default Footer;
