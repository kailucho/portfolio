import React, { useEffect, useState } from "react";
import "./portfolio.css";
import client from "../../contentfulClient"; // Ajusta la ruta según tu estructura

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "portfolio" }) // Asegúrate de usar el ID correcto de tu modelo
      .then((response) => setProjects(response.items))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          const { id } = project.sys;
          const { title, description, github, demo, image } = project.fields;
          // La URL de la imagen se encuentra en image.fields.file.url
          const imageUrl = image ? image.fields.file.url : "";
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={imageUrl} alt={title} loading="lazy" />
              </div>
              <h3>{title}</h3>
              {description && (
                <p className="portfolio__description">{description}</p>
              )}
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
