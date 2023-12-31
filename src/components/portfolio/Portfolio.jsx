import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Img22.jpeg";
import IMG2 from "../../assets/Img2.jpeg";
import IMG3 from "../../assets/img11.jpeg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Food App",
    github: "https://github.com/silvakeci/portfolio",
    demo: "https://gfudsgfhsfg.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Find The Number App",
    github: "https://github.com/silvakeci/game",
    demo: "https://gfudsgfhsfg.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "project tittle",
    github: "https://github.com/silvakeci/placeApp",
    demo: "https://gfudsgfhsfg.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "project tittle",
    github: "https://github.com",
    demo: "https://gfudsgfhsfg.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "project tittle",
    github: "https://github.com",
    demo: "https://gfudsgfhsfg.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "project tittle",
    github: "https://github.com",
    demo: "https://gfudsgfhsfg.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Me Recent Work</h5>
      <h2>Portfolio</h2>
      <div className=" container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt=" " />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
