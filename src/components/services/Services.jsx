import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Website Development: Creating functional and visually appealing
                websites using various technologies and programming languages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Front-end Development: Designing and coding the user interface,
                ensuring responsive and user-friendly experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                E-commerce Solutions: Building online stores, integrating
                payment gateways, and implementing shopping cart functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Responsive Design: Ensuring websites work seamlessly on various
                devices and screen sizes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Web Analytics: Setting up and configuring analytics tools to
                track website performance and user behavior.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Lorem, hfhsfishdfshfshfkjdfkjs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
