import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #dddada;
`;

export const StyledButton = styled.button`
  border: none;
  padding: 10px;
  background-color: hsl(180, 100%, 25%);
  color: ${({ theme }) => theme.color.white};
  transition: 1s;
  transform: 2s;

  &:hover {
    filter: brightness(110%);
    transform: scale(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }
`;
