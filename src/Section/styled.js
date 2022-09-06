import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background-color: white;
  word-break: break-word;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddada;
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 20px;
`;

export const SectionBody = styled.div`
  padding: 20px;
  padding-top: 20px;
`;
