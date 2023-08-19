import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";
import userEvent from "@testing-library/user-event";

describe("Test AddTodo Component", () => {
  it("check label", () => {
    render(<AddTodo todos={[]} updateTodos={jest.fn()} />);
    const labelElement = screen.getByLabelText("Add Task :");
    expect(labelElement).toBeInTheDocument();
  });

  it("check placeholder", () => {
    render(<AddTodo todos={[]} updateTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("check typed value", () => {
    render(<AddTodo todos={[]} updateTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);

    fireEvent.change(inputElement, {
      target: { value: "Learn Testing Library" },
    });
    expect((inputElement as any).value).toBe("Learn Testing Library");
  });

  it("check input after clicked button with fireEvent", () => {
    render(<AddTodo todos={[]} updateTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);

    fireEvent.change(inputElement, {
      target: { value: "Learn Testing Library" },
    });

    const buttonElement = screen.getByRole("button", { name: "追加" });
    fireEvent.click(buttonElement);

    expect((inputElement as any).value).toBe("");
  });

  it("check input after clicked button with userEvent", () => {
    const user = userEvent.setup();

    render(<AddTodo todos={[]} updateTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);

    user.type(inputElement, "Learn Testing Library");

    const buttonElement = screen.getByRole("button", { name: "追加" });
    user.click(buttonElement);

    expect((inputElement as any).value).toBe("");
  });
});
