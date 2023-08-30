import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/sil.png";
import HeaderSocial from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Silva Keci</h1>
        <h5 className="text-light">Forntend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a herf="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
