import React from "react";
import { StyledButtons, StyledSection} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
} from "../../tasksSlice";
import { Wrapper } from "./styled";
import { Button } from "../Button";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <StyledSection>
      <StyledButtons>
        {!areTasksEmpty && (
          <>
            <Button onClick={() => dispatch(toggleHideDone())}>
              {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
              onClick={() => dispatch(setAllDone())}
              disabled={isEveryTaskDone}
            >
              Ukończ wszystkie
            </Button>
          </>
        )}
      </StyledButtons>
    </StyledSection>
  );
};

export default Buttons;
