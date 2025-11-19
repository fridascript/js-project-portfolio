import React from "react";
import { projectsData } from "../components/projectsData";
import { FrameWork } from "../components/frameworkbtn";




export const Projects = (projects) => {
  return (
    <div className="projects">
      <h1>Featured Projects</h1>


      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img className="placeholder-img" src={project.image} alt={project.image} />


            <div className="project-info">
              <FrameWork frameworks={project.framework} />

              <h2 className="project-name">{project.name}</h2>
              <p className="project-text">{project.description} </p>

              <div>
                <a className="project-links" href={project.demoLink}>Live Demo</a>
                <a className="project-links" href={project.githubLink}>Github</a>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};