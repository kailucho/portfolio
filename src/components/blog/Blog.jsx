import React from "react";
import "./blog.css";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      content: "React Hooks are functions that let you use state and other React features without writing a class...",
      link: "#",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      content: "ES6 introduced many new features to JavaScript, including arrow functions, template literals, and destructuring...",
      link: "#",
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns...",
      link: "#",
    },
  ];

  return (
    <section id="blog">
      <h5>Latest Posts</h5>
      <h2>Blog</h2>
      <div className="container blog__container">
        {posts.map(({ id, title, content, link }) => (
          <article key={id} className="blog__post">
            <h3>{title}</h3>
            <p>{content}</p>
            <a href={link} className="btn btn-primary">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
