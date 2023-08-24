import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiTwitterLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li href="#">Home</li>
        <li href="#about">About</li>
        <li href="#expeirience">Expeirience</li>
        <li href="#services">Services</li>
        <li href="#portfolio">Portfolio</li>
        <li href="#testimonials">Testimonials</li>
        <li href="#contact">Contact</li>
      </ul>
      <div className="footer__socials">
        <a href="www.instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="www.facebook.com">
          <AiOutlineFacebook />
        </a>
        <a href="www.twitter.com">
          <PiTwitterLogoBold />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
