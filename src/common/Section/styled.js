import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.color.white};
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddada;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
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
