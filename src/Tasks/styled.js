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

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const StyledContent = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  padding: 0;
  width: 30px;
  height: 30px;
  transition: background 0.5s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};

      &:hover {
        filter: brightness(110%);
        cursor: pointer;
      }

      &:active {
        filter: brightness(120%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
        background-color: ${({ theme }) => theme.color.redRibbon};

     &:hover {
       filter: brightness(110%);
        cursor: pointer;
     }   

     &:active {
        filter: brightness(120%);
     }
   }
    `}
`;
