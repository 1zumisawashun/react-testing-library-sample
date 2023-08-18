import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const initialState = [
    {
      task: "Learn vue.js",
      isCompleted: false,
    },
    {
      task: "Learn React Hook",
      isCompleted: false,
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false,
    },
  ];

  type Todo = {
    task: string;
    isCompleted: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>(initialState);

  const updateTodos = (val: Todo[]) => {
    setTodos(val);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo todos={todos} updateTodos={updateTodos} />
      <TodoList todos={todos} updateTodos={updateTodos} />
    </div>
  );
};

export default Todo;
