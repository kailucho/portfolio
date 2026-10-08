import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const MOTION_ELEMENTS = {
  article: motion.article,
  div: motion.div,
};

const Reveal = ({ children, className = "", as = "div", delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = MOTION_ELEMENTS[as] || motion.div;

  return (
    <MotionElement
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.28, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionElement>
  );
};

export default Reveal;
