import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";

describe("AddTodo", () => {
  it("renders label element", () => {
    render(<AddTodo />);
    const labelElement = screen.getByLabelText("Add Task :");
    expect(labelElement).toBeInTheDocument();
  });

  it("renders input element", () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    expect(inputElement).toBeInTheDocument();

    // fireEvent.change(inputElement, {
    //   target: { value: "Learn Testing Library" },
    // });
    // expect((inputElement as any).value).toBe("Learn Testing Library");

    // const buttonElement = screen.getByRole("button", { name: "追加" });
    // fireEvent.click(buttonElement);

    // expect((inputElement as any).value).toBe("");
  });
});
