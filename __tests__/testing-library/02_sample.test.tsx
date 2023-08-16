import { render, screen } from "@testing-library/react";
import App from "@/pages/02_sample";

it("try getAllByText", () => {
  render(<App />);

  // NOTE:配列で取得する（複数取得することができる）ターゲットはhtmlタグではなくテキスト
  const elements = screen.getAllByText("Hello");
  expect(elements).toHaveLength(2);
});
