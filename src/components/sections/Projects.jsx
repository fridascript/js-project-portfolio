import React from "react";
import styled from "styled-components";
import { projectsData } from "../projectsData";
import { ProjectCard } from "../items/ProjectCard";
import { ArrowIcon } from "../../img/icons";

// for styling component 
const Section = styled.section`
  background: ${({ theme }) => theme.surface.light.background};
  color: ${({ theme }) => theme.surface.light.text};
  padding: ${({ theme }) => theme.spacing.sectionY} 16px;
  text-align: center;
`;
const MoreProjects = styled.button`
background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 16px;
  max-width: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  margin: 30px auto 0;
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
  return (
    <Section>
      <h1>Featured Projects</h1>

      {projectsData.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
      <MoreProjects>
        <Icon><ArrowIcon /></Icon>See more projects
      </MoreProjects>
    </Section>

  );
};
