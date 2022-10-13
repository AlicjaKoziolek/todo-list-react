import { StyledList, StyledItem, StyledContent, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <StyledList>
      {tasks.map((task) => (
        <StyledItem 
        key={task.id} 
        hidden={task.done && hideDone}>
          <StyledButton
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </StyledButton>
          <StyledContent done={task.done}>{task.content}</StyledContent>
          <StyledButton remove onClick={() => removeTask(task.id)}>
            🗑
          </StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default TaskList;
