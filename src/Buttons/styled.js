import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  color: teal;
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: hsl(180, 100%, 30%);
  }

  &:active {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: #dddada;
  }
`;
