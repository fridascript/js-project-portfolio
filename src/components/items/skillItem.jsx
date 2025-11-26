import React from "react";
import styled from "styled-components";

// for styling component items
const Item = styled.li`
  margin-bottom: 6px;
`;

export const SkillItem = ({ children }) => <Item>{children}</Item>;
