import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "Przejść na Reacta", done: false },
  { id: 2, content: "Zrobić zakupy", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
     <Header title="Lista zadań" />
      <Section 
      title="Dodaj nowe zadanie" 
      body={<Form />} 
      />
      <Section 
      title="Lista zadań" 
      body= {<Tasks tasks={tasks} hideDone={hideDone} />}
      extraHeaderContent= {<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
