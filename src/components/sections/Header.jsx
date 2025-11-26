import React from "react";
import styled from "styled-components";
import headerImg from "../../img/headerimg.png";

// for styling component 
const WrapperHeader = styled.header`
  background: ${({ theme }) => theme.surface.light.background};
  color: ${({ theme }) => theme.surface.light.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
`;
const HeaderImage = styled.img`
  width: 70%;
  height: auto;
  margin: 20px 0;
`;

export const Header = () => {
  return (
    <WrapperHeader>
      <p>Hi there I am</p>
      <h1>Frida Engman</h1>
      <HeaderImage src={headerImg} alt="header-image" />
      <h2>
        Creative Frontend Developer
      </h2>
      <p>
        Creative front-end developer with a passion for design, code, and human-centered
        digital experiences.
      </p>
    </WrapperHeader>
  );
};
