type Todo = {
  task: string;
  isCompleted: boolean;
};

const TodoList = ({
  todos,
  updateTodos,
}: {
  todos: Todo[];
  updateTodos: (val: Todo[]) => void;
}) => {
  const handleRemoveTask = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updateTodos(newTodos);
  };

  const handleUpdateTask = (index: number) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    updateTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(index)}
          />
          {todo.task}
          <span
            onClick={() => handleRemoveTask(index)}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
