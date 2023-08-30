import React from "react";
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiTwitterLogoBold } from "react-icons/pi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Expeirience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        {/* <a href="#testimonials">Testimonials</a> */}
        <a href="#contact">Contact</a>
      </ul>
      <div className="footer__socials">
        <a href="www.instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.linkedin.com/in/silva-keci-6a3004246/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/silvakeci">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
