import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button } from "../Button";


const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default FetchExampleTasksButton;
