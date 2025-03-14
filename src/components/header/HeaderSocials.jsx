import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/luijhy-michael-guerra-flores"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/kailucho"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
