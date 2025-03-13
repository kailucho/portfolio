import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello I'm
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Luijhy Guerra
        </motion.h1>
        <motion.h5
          className="text-light"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          React Developer
        </motion.h5>
        <CTA />
        <HeaderSocials />
        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src={ME} alt="Luijhy Guerra" />
        </motion.div>

        <a href="#contact" className="scroll__down" aria-label="Scroll Down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
