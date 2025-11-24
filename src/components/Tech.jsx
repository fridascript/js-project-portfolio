import React from "react";
import styled from "styled-components";

const TechSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;
  padding: 64px 16px;
  margin: 0;
`;



export const Tech = (tech) => {
  return (
    <TechSection>
      <h1>Tech</h1>
      <p>HTML, CSS, Flexbox, JavaScript, Web Accessibility, APIs, mob-programming, <br></br>pair-programming, GitHub.
        ES6, JSX, React</p>
    </TechSection>
  );
};