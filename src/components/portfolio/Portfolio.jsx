import React from "react";

import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "contenful nextjs recipes",
    github: "https://github.com/kailucho/contenful-nextjs-recipes",
    demo: "https://contenful-nextjs-recipes.vercel.app/",
  },
  {
    id: 2,
    image: IMG1,
    title: "covid-19 tracker ",
    github: "https://github.com/kailucho/covid19-tracker",
    demo: "https://covid19-tracker-kaido.netlify.app/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Amazon clone ",
    github: "https://github.com/kailucho/amazon-clone",
    demo: "https://clone-8d9f5.web.app/",
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
