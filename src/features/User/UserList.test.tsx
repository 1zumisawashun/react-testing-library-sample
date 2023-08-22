import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

// NOTE:axiosのmockは必要ない？src/components/Fetch/Fetch.test.tsx
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: [{ name: "Kevin Doe", id: 1 }],
    }),
  },
}));

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
    // find は async, await 関数と利用できる
    const listElements = await screen.findAllByRole("listitem");
    // screen.debug();
    expect(listElements[0]).toBeInTheDocument();
  });
});
