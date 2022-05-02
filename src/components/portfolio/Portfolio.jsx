import React from "react";

import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "covid-19 tracker ",
    github: "https://github.com/kailucho/covid19-tracker",
    demo: "https://covid19-tracker-kaido.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ image, title, github, demo }, index) => (
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="IMG1" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
