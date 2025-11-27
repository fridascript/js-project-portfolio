import React from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
import { theme } from "../../theme";
import { SkillItem } from "../items/skillItem";

// for styling component 
const Section = styled.section`
  background: ${({ theme }) => theme.surface.dark.background};
  color: ${({ theme }) => theme.surface.dark.text};
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  margin-top: 20px;


  /* Tablet */
  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
  }

  /*desktop*/
  @media (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: center;
  }

`;
const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left; 
  align-items: flex-start;
  
  /* Tablet */
  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.desktop}) {
    text-align: center;
    align-items: center;
  }

  /* Desktop */
  @media (min-width: ${theme.breakpoints.desktop}) {
    text-align: left;
    align-items: flex-start;
  }
`;
const SkillHeadline = styled.h3`
  border: 1px solid ${({ theme }) => theme.surface.dark.text};
  border-radius: 4px;
  padding: 2px 16px;
  margin-bottom: 16px;
`;
const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Skills = () => {
  return (
    <Section>
      <SectionTitle dark>Skills</SectionTitle>

      <SkillsContainer>
        <SkillColumn>
          <SkillHeadline>Code</SkillHeadline>
          <SkillList>
            <SkillItem>HTML5</SkillItem>
            <SkillItem>CSS3</SkillItem>
            <SkillItem>JavaScript ES6</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Styled Components</SkillItem>
            <SkillItem>GitHub</SkillItem>
          </SkillList>
        </SkillColumn>

        <SkillColumn>
          <SkillHeadline>Toolbox</SkillHeadline>
          <SkillList>
            <SkillItem>VS-code</SkillItem>
            <SkillItem>Adobe Photoshop</SkillItem>
            <SkillItem>Adobe Illustrator</SkillItem>
            <SkillItem>Figma</SkillItem>
            <SkillItem>Keynote</SkillItem>
            <SkillItem>Slack</SkillItem>
          </SkillList>
        </SkillColumn>

        <SkillColumn>
          <SkillHeadline>Upcoming</SkillHeadline>
          <SkillList>
            <SkillItem>Node.js</SkillItem>
          </SkillList>
        </SkillColumn>

        <SkillColumn>
          <SkillHeadline>More</SkillHeadline>
          <SkillList>
            <SkillItem>Branding</SkillItem>
            <SkillItem>Strategy</SkillItem>
            <SkillItem>Process Design</SkillItem>
            <SkillItem>Concept Development</SkillItem>
            <SkillItem>Agile methodology</SkillItem>
          </SkillList>
        </SkillColumn>
      </SkillsContainer>
    </Section>
  );
};
