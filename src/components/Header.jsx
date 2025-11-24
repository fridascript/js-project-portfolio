import React from "react";
import styled from "styled-components";
import headerImg from "../img/headerimg.png"

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
`;

const HeaderImage = styled.img`
  width: 70%;      
  height: auto;     
`;


export const Header = (header) => {
  return (
    <HeaderWrapper>
      <p>Hi there I am</p>
      <h1>Frida Engman</h1>
      <HeaderImage src={headerImg} alt="header-image" />
      <h2> Creative Frontend Developer with a background in <br></br> Behavior Science. </h2>
      <p>Creative front-end developer with a passion for design, code, and human-centered <br></br>digital experiences.</p>
    </HeaderWrapper>
  );
};