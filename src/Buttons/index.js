import React from "react";
import { StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <React.Fragment>
      <div>
        <StyledButton onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </StyledButton>
        <StyledButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </StyledButton>
      </div>
    </React.Fragment>
  );

export default Buttons;
