import React from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
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
      <Text>Hi there I am</Text>
      <SectionTitle>Frida Engman</SectionTitle>
      <HeaderImage src={headerImg} alt="Portrait of Frida Engman" />
      <SubTitle>
        Creative Frontend Developer
      </SubTitle>
      <Text>
        Creative front-end developer with a passion for design, code, and human-centered
        digital experiences.
      </Text>
    </WrapperHeader>
  );
};
