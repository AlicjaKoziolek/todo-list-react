import { useRef, useState } from "react";
import { StyledButton, StyledInput, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (trimmedNewTaskContent === "") {
      return;
    }
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <StyledButton>Dodaj zadanie</StyledButton>
    </StyledForm>
  );
};

export default Form;
