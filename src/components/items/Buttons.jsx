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
 text-decoration: underline;
 `;

// for read article 
export const ActionButton = styled(ButtonBase).attrs({ as: "button" })`
`;



//show more/less buttons:
export const ToggleButton = styled(ButtonBase).attrs({ as: "button" })`
 background-color: ${({ $active }) => ($active ? "black" : "white")};
 color: ${({ $active }) => ($active ? "white" : "black")};
 border: 1px solid black; 
 border-radius: 12px; 
 padding: 4px 12px; 
 font-size: 16px; 
 width: auto; 
 display: flex; 
 margin: 30px auto 0; 
 cursor: pointer; 
 `;
