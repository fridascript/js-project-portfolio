import React from "react";
import styled from "styled-components";

// for media queries //
const breakpoints = {
  tabletMin: '768px',
  tabletMax: '1024px',
  desktop: '1025px',
};

// styling for components//

const SkillsSection = styled.div`
  background-color: black;
  color: white;
  padding: 64px 16px;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
`;

const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    align-items: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 200px;
    min-height: 250px;
    align-items: flex-start;
  }
`;

const SkillHeadline = styled.h3`
  width: 100%;
  max-width: 200px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 4px 8px;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 142px;
    padding: 2px 6px;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    text-align: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    text-align: left;
  }
`;

// component //

export const Skills = () => {
  return (
    <SkillsSection>
      <h1>Skills</h1>

      <SkillsContainer>
        <SkillColumn>
          <SkillHeadline>Code</SkillHeadline>
          <SkillList>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </SkillList>
        </SkillColumn>

        <SkillColumn>
          <SkillHeadline>Toolbox</SkillHeadline>
          <SkillList>
            <li>VS-code</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Slack</li>
          </SkillList>
        </SkillColumn>

        <SkillColumn>
          <SkillHeadline>Upcoming</SkillHeadline>
          <SkillList>
            <li>Node.js</li>
          </SkillList>
        </SkillColumn>

        <SkillColumn>
          <SkillHeadline>More</SkillHeadline>
          <SkillList>
            <li>Branding</li>
            <li>Strategy</li>
            <li>Process Design</li>
            <li>Concept Development</li>
            <li>Agile methodology</li>
          </SkillList>
        </SkillColumn>
      </SkillsContainer>
    </SkillsSection>
  );
};



