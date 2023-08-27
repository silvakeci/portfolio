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
              <p>
                Mobile App Development: Creating functional and user-friendly
                mobile applications for various platforms (iOS, Android, etc.).
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                Native App Development: Building apps using platform-specific
                languages and tools (Swift for iOS, Kotlin for Android).
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                E-commerce Mobile Apps: Creating mobile apps for online
                shopping, including payment integration and product browsing.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                App Optimization: Improving app performance, speed, and
                responsiveness.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                App Store Deployment: Assisting in submitting apps to app
                stores, complying with store guidelines and regulations.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
