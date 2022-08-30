import { Header, Inside, Segment, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Segment>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Inside>{body}</Inside>
  </Segment>
);

export default Section;
