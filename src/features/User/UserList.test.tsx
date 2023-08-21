import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList", () => {
  it("render UserList", () => {
    render(<UserList />);
    const headingElement = screen.getByRole("heading", {
      name: /ユーザ一覧/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render users list", async () => {
    render(<UserList />);
    // axiosでフェッチしているので非同期にコードを書く必要がある
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements[0]).toBeInTheDocument();
  });
});
