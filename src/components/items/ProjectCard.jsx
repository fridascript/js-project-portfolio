import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { FrameWork } from "./frameworkbtn";
import { DemoIcon, GithubIcon } from "../../img/icons";

// for styling component items
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  border: 1px solid red;
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
const Image = styled.img`
  width: 100%;
  border-radius: 12px;

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 80%;
  }
`;
const Info = styled.div``;
const Title = styled.h2``;
const Text = styled.p``;

const LinkButton = styled.a`
  background: black;
  color: white;
  display: flex;
  width: 60%;
  max-width: 303px;
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 4px;
  gap: 16px;
  text-decoration: none;
`;

const Icon = styled.div`
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
    <Image src={project.image} alt={project.name} />
    <Info>
      <FrameWork frameworks={project.framework} />
      <Title>{project.name}</Title>
      <Text>{project.description}</Text>
      <div>
        <LinkButton href={project.demoLink}>
          <Icon><DemoIcon /></Icon> Live Demo
        </LinkButton>
        <LinkButton href={project.githubLink}>
          <Icon><GithubIcon /></Icon> Github
        </LinkButton>
      </div>
    </Info>
  </Card>
);
