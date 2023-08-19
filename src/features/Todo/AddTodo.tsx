import { useState, BaseSyntheticEvent } from "react";

type Todo = {
  task: string;
  isCompleted: boolean;
};

const AddTodo = ({
  todos,
  updateTodos,
}: {
  todos: Todo[];
  updateTodos: (val: Todo[]) => void;
}) => {
  const [task, setTask] = useState<string>("");

  const handleNewTask = (event: BaseSyntheticEvent) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (task === "") return;
    if (!updateTodos || !todos) return;
    updateTodos([...todos, { task, isCompleted: false }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Add Task :</label>
      <input
        id="task"
        value={task}
        placeholder="Add New Task"
        onChange={handleNewTask}
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default AddTodo;
