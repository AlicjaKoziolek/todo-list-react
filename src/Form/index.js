import { useRef, useState } from "react";
import { Button, Input, Inside } from "./styled";

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
    <Inside onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </Inside>
  );
};

export default Form;
