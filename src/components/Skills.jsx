import React from "react";

export const Skills = (skills) => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-column">
          <h3 className="skill-headlines">Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div className="skill-column">
          <h3 className="skill-headlines">Toolbox</h3>
          <ul>
            <li>VS-code</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Slack</li>
          </ul>
        </div>

        <div className="skill-column">
          <h3 className="skill-headlines">Upcoming</h3>
          <ul>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="skill-column">
          <h3 className="skill-headlines">More</h3>
          <ul>
            <li>Branding</li>
            <li>Strategy</li>
            <li>Process Design</li>
            <li>Concept Development</li>
            <li>Agile methodology</li>
          </ul>
        </div>


      </div>
    </div>
  );
};