import { render, screen } from "@testing-library/react";
import App from "@/pages/03_sample";

// NOTE: https://www.w3.org/TR/html-aria/#docconformance
it("try getAllByRole", () => {
  render(<App />);
  // NOTE:htmlタグ（厳密にはrole）で複数取得する
  const listElements = screen.getAllByRole("listitem");
  expect(listElements).toHaveLength(3);
});
