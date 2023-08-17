import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Power from "./Power";

describe("try fireEvent, userEvent v14", () => {
  it("renders Power Component", () => {
    render(<Power name="電源" />);
    const nameElement = screen.getByText(/電源 off/i);
    expect(nameElement).toBeInTheDocument();
  });

  it("on button enable", () => {
    render(<Power name="電源" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    expect(onButtonElement).not.toBeDisabled();
  });

  it("change from off to on with fireEvent", () => {
    render(<Power name="電源" />);

    const onButtonElement = screen.getByRole("button", { name: "ON" });
    fireEvent.pointerDown(onButtonElement);
    fireEvent.click(onButtonElement);

    expect(onButtonElement).toBeDisabled();
  });

  it("change from off to on with userEvent v14", async () => {
    const user = userEvent.setup();

    render(<Power name="電源" />);

    const onButtonElement = screen.getByRole("button", { name: "ON" });
    await user.click(onButtonElement);

    expect(onButtonElement).toBeDisabled();
  });
});
