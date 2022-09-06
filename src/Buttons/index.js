import React from "react";
import { StyledButton, StyledSection } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <>
      <StyledSection>
        <StyledButton onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </StyledButton>
        <StyledButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </StyledButton>
      </StyledSection>
    </>
  );

export default Buttons;
