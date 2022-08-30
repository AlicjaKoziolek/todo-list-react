import styled from "styled-components";

export const Inside = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #dddada;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: hsl(180, 100%, 25%);
  color: white;
  transition: 1s;
  transform: 2s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(110%);
    cursor: pointer;
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
}
`;
