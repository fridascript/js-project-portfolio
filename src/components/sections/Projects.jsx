import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
import { projectsData } from "../projectsData";
import { ProjectCard } from "../items/ProjectCard";
import { ArrowIcon } from "../../img/icons";
import { ToggleButton } from "../items/Buttons";

const Section = styled.section`
  background: ${({ theme }) => theme.surface.light.background};
  color: ${({ theme }) => theme.surface.light.text};
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
  text-align: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData.length : 2;

  return (
    <Section>
      <SectionTitle>Featured Projects</SectionTitle>

      {projectsData.slice(0, visibleProjects).map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}

      <ToggleButton $active={showAll} onClick={() => setShowAll(!showAll)}>
        {!showAll && <Icon><ArrowIcon aria-hidden="true" /></Icon>}
        {showAll ? "Show fewer" : "See more projects"}
      </ToggleButton>
    </Section>
  );
};
