import React from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
import { TechItem } from "../items/techItem";


// for styling component 
const Section = styled.section`
  background: ${({ theme }) => theme.surface.dark.background};
  color: ${({ theme }) => theme.surface.dark.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  max-width: 600px;
`;

export const Tech = () => {
  const techs = [
    "HTML",
    "CSS",
    "Flexbox",
    "JavaScript",
    "Web Accessibility",
    "APIs",
    "Mob-programming",
    "Pair-programming",
    "GitHub",
    "ES6",
    "JSX",
    "React",
  ];

  return (
    <Section>
      <SectionTitle dark>Tech</SectionTitle>
      <List>
        {techs.map((t, i) => (
          <TechItem key={i}>{t}</TechItem>
        ))}
      </List>
    </Section>
  );
};
