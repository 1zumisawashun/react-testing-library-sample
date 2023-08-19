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

    const listElements = screen.getAllByRole("listitem");

    expect(listElements).toHaveLength(4);
  });
});
