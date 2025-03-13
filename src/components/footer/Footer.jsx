import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Luijhy
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/kailucho">
          <FaFacebookF />
        </a>

        <a
          href="https://www.linkedin.com/in/luijhy-michael-guerra-flores"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/kailucho" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; kaidos. All rights reserve</small>
      </div>
    </footer>
  );
};

export default Footer;
