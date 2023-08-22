import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a herf="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a herf="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a herf="https://dribble.com" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};
export default HeaderSocial;
