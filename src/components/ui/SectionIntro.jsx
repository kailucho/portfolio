import React from "react";

const SectionIntro = ({ index, eyebrow, title, description, inverse = false }) => (
  <header className={`section-intro${inverse ? " section-intro--inverse" : ""}`}>
    <div className="section-intro__index" aria-hidden="true">
      <span>{index}</span>
      <span className="section-intro__line" />
    </div>
    <div className="section-intro__title-group">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
    {description && <p className="section-intro__description">{description}</p>}
  </header>
);

export default SectionIntro;
