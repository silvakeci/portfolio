import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/silva-keci-6a3004246/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/silvakeci" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};
export default HeaderSocial;
