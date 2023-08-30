import React from "react";
import "./about.css";
import ME from "../../assets/s2.png";
import { LiaAwardSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <LiaAwardSolid className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ happy clients</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Project</h5>
              <small>8 Completed</small>
            </article>
          </div>

          <p>
            Crafting seamless digital experiences from front-end to back-end, I
            am a Frontend Developer with a passion for turning ideas into
            elegant, functional solutions. With a keen eye for user-centric
            design and a knack for building robust server systems, I bridge the
            gap between creativity and technology. My code weaves the fabric of
            the digital world, ensuring every click is intuitive and every
            interaction is delightful. Join me on a journey where innovation
            meets implementation.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
