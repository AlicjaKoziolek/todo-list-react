import { StyledSection, StyledHeader, StyledTitle, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      {extraHeaderContent}
    </StyledHeader>
    <SectionBody>{body}</SectionBody>
  </StyledSection>
);

export default Section;
