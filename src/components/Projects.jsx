import React from "react";
import styled from "styled-components";
import { projectsData } from "../components/projectsData";
import { FrameWork } from "../components/frameworkbtn";
import { DemoIcon, GithubIcon } from "../img/icons";

//for media queries//
const breakpoints = {
  tabletMin: "768px",
  tabletMax: "1024px",
  desktop: "1025px",
};

// styling for component //

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 2rem;
  padding: 1rem;
  margin: 0;



  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr; 
  }
`;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 20px;
  border: 1px solid red;
  align-items: center;
  border-radius: 12px;
  padding: 1rem;

  
  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    .project-info {
      margin-top: 0;
    }
  }

 
  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;

    &:nth-child(even) {
      direction: rtl;

      img,
      .project-info {
        direction: ltr;
      }
    }

    .project-info {
      margin-top: 0;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 12px;


  @media (min-width: ${breakpoints.desktop}) {
    width: 80%;
    max-width: 80%;
  }
`;

const ProjectInfo = styled.div`
  margin-top: 1rem;
`;

const ProjectName = styled.h2`
  margin: 0.5rem 0;
`;

const ProjectText = styled.p`
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  background: black;
  color: white;
  display: flex;
  align-items: left;
  width: 60%;
  max-width: 303px;
  margin-bottom: 10px;
  border-radius: 12px;
  justify-content: flex-start;
  padding: 6px;
  text-decoration: none;
  gap: 16px;
`;

//component//

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>Featured Projects</h1>

      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage
              src={project.image}
              alt={project.name}
              className="placeholder-img"
            />

            <ProjectInfo>
              <FrameWork frameworks={project.framework} />

              <ProjectName>{project.name}</ProjectName>
              <ProjectText>{project.description}</ProjectText>

              <div>
                <ProjectLink href={project.demoLink}>
                  <DemoIcon /> Live Demo
                </ProjectLink>

                <ProjectLink href={project.githubLink}>
                  <GithubIcon /> Github
                </ProjectLink>
              </div>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
};
