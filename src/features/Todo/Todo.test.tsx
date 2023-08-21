import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";

describe("Todo", () => {
  it("should render header tag title", () => {
    render(<Todo />);
    const headingElement = screen.getByRole("heading", { name: /Todo List/i });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render default three todos", () => {
    render(<Todo />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(3);
  });

  it("should render 4 todos where i add new task", async () => {
    const user = userEvent.setup();

    render(<Todo />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    const buttonElement = screen.getByRole("button", { name: "追加" });

    await user.type(inputElement, "Learn Testing Library");
    await user.click(buttonElement);

    // NOTE:special characters
    // user.type(inputElement, 'Learn Testing Library{enter]');

    const listElements = screen.getAllByRole("listitem");

    expect(listElements).toHaveLength(4);
  });

  it("should have style after i add new task and check checkbox", async () => {
    const user = userEvent.setup();

    render(<Todo />);
    const inputElement = screen.getByPlaceholderText(/add new task/i);
    const buttonElement = screen.getByRole("button", { name: "追加" });

    await user.type(inputElement, "Learn Testing Library");
    await user.click(buttonElement);

    const listElement = screen.getByText(/Learn Testing Library/i);

    await user.click((listElement as any).querySelector("input"));

    expect(listElement).toHaveStyle("text-decoration:line-through");
  });

  it("should delete task when i click delete X", async () => {
    const user = userEvent.setup();

    render(<Todo />);
    const inputElement = screen.getByPlaceholderText(/add new task/i);
    const buttonElement = screen.getByRole("button", { name: "追加" });

    await user.type(inputElement, "Learn Testing Library");
    await user.click(buttonElement);
    expect(screen.getAllByRole("listitem")).toHaveLength(4);

    const listElement = screen.getByText(/Learn Testing Library/i);
    // NOTE:削除ボタン
    await user.click((listElement as any).querySelector("span"));
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
