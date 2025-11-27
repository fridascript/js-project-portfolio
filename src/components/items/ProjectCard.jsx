import React from "react";
import styled from "styled-components";
import { SectionTitle, SubTitle, Text } from "../UI/SectionTitle";
import { theme } from "../../theme";
import { FrameWork } from "./frameworkbtn";
import { LinkButton } from "../items/Buttons";
import { DemoIcon, GithubIcon } from "../../img/icons";

// for styling component items
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1rem;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: ${theme.breakpoints.tablet}){
     padding: 5rem;
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 40px;
    padding: 5rem;

    &:nth-child(even) {
      direction: rtl;

      img,
      div {
        direction: ltr;
      }
    }
  }
`;

//project image
const ProjectImage = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 80%;
  }
`;

//project content
const ProjectInfo = styled.div``;

//button icon 
const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;

  svg {
    width: 20px; 
    height: 20px;
  }
`;


export const ProjectCard = ({ project }) => (
  <Card>
    <ProjectImage src={project.image} alt={`picture of project ${name}`} />
    <ProjectInfo>
      <FrameWork frameworks={project.framework} />
      <SubTitle>{project.name}</SubTitle>
      <Text>{project.description}</Text>
      <div>
        <LinkButton href={project.demoLink}>
          <ButtonIcon><DemoIcon aria-hidden="true" /></ButtonIcon> Live Demo
        </LinkButton>
        <LinkButton href={project.githubLink}>
          <ButtonIcon><GithubIcon aria-hidden="true" /></ButtonIcon> Github
        </LinkButton>
      </div>
    </ProjectInfo>
  </Card>
);
