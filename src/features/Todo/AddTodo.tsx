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
    updateTodos([...todos, { task, isCompleted: false }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Task :
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
      <button type="submit">追加</button>
    </form>
  );
};

export default AddTodo;
