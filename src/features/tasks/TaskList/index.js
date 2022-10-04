import { StyledList, StyledItem, StyledContent, StyledButton } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <StyledList>
    {tasks.map((task) => (
      <StyledItem 
        key={task.id} 
        hidden={task.done && hideDone}>
        <StyledButton
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </StyledButton>
        <StyledContent 
          done={task.done}>
          {task.content}
        </StyledContent>
        <StyledButton
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </StyledButton>
      </StyledItem>
    ))}
  </StyledList>
);

export default TaskList;
