import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  color: teal;
  border: none;
  margin: 0 0 0 20px;
  padding: 10px;
  transition: color 0.3s;
  cursor: pointer;

  @media (max-width: 767px) {
    flex-basis: 100%;
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

export const StyledSection = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
