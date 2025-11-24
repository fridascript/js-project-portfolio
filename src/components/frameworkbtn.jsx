import React from 'react';
import styled from 'styled-components';

const FrameworkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const FrameworkBox = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 14px;
  max-width: 142px;
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const FrameWork = ({ frameworks }) => {
  if (!frameworks) return null;

  const fwArray = Array.isArray(frameworks) ? frameworks : [frameworks];

  return (
    <FrameworkContainer>
      {fwArray.map((fw, index) => (
        <FrameworkBox key={index}>{fw}</FrameworkBox>
      ))}
    </FrameworkContainer>
  );
};




