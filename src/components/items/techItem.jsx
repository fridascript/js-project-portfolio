import React from "react";
import styled from "styled-components";

// for styling component items
const Item = styled.div`
  padding: 2px 8px;
  font-size: 16px; 
`;

export const TechItem = ({ children }) => <Item>{children}</Item>;
