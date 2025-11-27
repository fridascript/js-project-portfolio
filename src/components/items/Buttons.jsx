import styled from "styled-components";


const ButtonBase = styled.div`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  width: 60%;
  max-width: 303px;
  border-radius: 12px;
  font-size: 16px;    
  font-family: inherit;
  padding: 4px 12px;
  gap: 16px;
  margin-bottom: 13px;
  text-decoration: none;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
     transform: scale(1.1);
  }
`;

// for demo + github links
export const LinkButton = styled(ButtonBase).attrs({ as: "a" })`
 text-decoration: underline`;

// for read article 
export const ActionButton = styled(ButtonBase).attrs({ as: "button" })`
`;