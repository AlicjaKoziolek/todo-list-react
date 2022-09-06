import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #dddada;

  ${({ hidden }) => hidden && css`
      display: none;
    `}
`;

export const StyledContent = styled.span`
  ${({ done }) => done && css`
      text-decoration: line-through;
    `}
`;

export const StyledButton = styled.button`
    border: none;
    color: white;
    padding: 0;
    width: 30px;
    height: 30px;
    transition: background 0.5s;

    ${({toggleDone}) => toggleDone && css`
    background-color: hsl(120, 63%, 36%);

    &:hover {
        background-color:  hsl(120, 63%, 40%);
        cursor: pointer;
    }

    &:active {
        background-color:  hsl(120, 63%, 45%);
    }
    `}

    ${({remove}) => remove && css`
        background-color:  hsl(348, 91%, 46%);

     &:hover {
        background-color:  hsl(348, 91%, 57%);
        cursor: pointer;
     }   

     &:active {
        background-color:  hsl(348, 91%, 51%);
     }
   }
    `}
`;
