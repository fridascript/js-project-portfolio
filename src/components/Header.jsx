import React from "react";
import headerImg from "../img/headerimg.png"


export const Header = (header) => {
  return (
    <header className="header">
      <p>Hi there I am</p>
      <h1>Frida Engman</h1>
      <img className="header-img" src={headerImg} alt="header-image" />
      <h2> Creative Frontend Developer with a background in <br></br> Behavior Science. </h2>
      <p>Creative front-end developer with a passion for design, code, and human-centered <br></br>digital experiences.</p>
    </header>
  );
};