import { render, screen } from "@testing-library/react";
import App from "@/pages/01_sample";

describe("try getByText, queryByText, findByText", () => {
  // NOTE:普通の要素取得
  it("try getByText", () => {
    render(<App />);
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
  });

  // NOTE:取得できない場合はnullを返す（処理がストップしない）
  it("try queryByText", () => {
    render(<App />);
    const element = screen.queryByText("hey");
    expect(element).not.toBeInTheDocument();
  });

  // NOTE:findByTextの返り値がPromiseなのでasync/awaitが必要になる
  it("try renders Hello", async () => {
    render(<App />);
    const element = await screen.findByText("Hello");
    expect(element).toBeInTheDocument();
  });
});
