import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header 
        title="Lista zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} />
      <Section 
        title="Wyszukiwarka" 
        body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default TasksPage;
