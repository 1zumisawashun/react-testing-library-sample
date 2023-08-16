import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

// NOTE:テンプレートに入っていたテストコード
// NOTE:screen.debug();の検証
// NOTE:aタグを跨ぐ文字列の取得はscreen.getByTextでは不可
// NOTE:https://www.w3.org/TR/html-aria/#docconformance
describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    // screen.debug();
    // const heading = screen.getByText(/welcome to next\.js!/i);
    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
