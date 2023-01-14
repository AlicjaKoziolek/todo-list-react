import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze strony" />
    <Section
      title="Alicja Koziołek"
      body={
        <>
          <p>
            Od ponad 10 lat jestem <strong>szczęśliwą żoną i mamą. </strong> 
            Uwielbiam spędzać czas w gronie rodziny i znajomych 👨‍👩‍👧‍👦.
          </p>
          <p>
            W długie jesienno- zimowe wieczory często gramy w gry planszowe 🎲.
            Posiadam również <strong>zamiłowania kulinarne</strong> - w
            szczególności uwielbiam robić torty okolicznościowe 🎂.
            <strong> Moją pasją jest również sport</strong> - w szczególności
            fitness, rower i łyżworolki 🧘‍♀️🚵‍♀️.
          </p>
          <p>
            Mimo, że ukończyłam studia na kierunku
            <em>Zarządzanie logistyczno-marketingowe</em>, nie czuję aby była to
            moja ścieżka, którą chciałabym kontynuować. Chciałabym znaleźć
            pracę, która <strong>stanie się moją pasją</strong> i pozwoli mi
            pogodzić obowiązki mamy i żony z pracą zawodową 🤩.
          </p>
        </>
      }
    />
  </Container>
);
