import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) =>
  tasks.length > 0 && (
    <React.Fragment>
      <div>
        <button onClick={toggleHideDone} className="buttons__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </div>
    </React.Fragment>
  );

export default Buttons;
