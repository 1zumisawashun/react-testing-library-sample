import { render, screen } from "@testing-library/react";
import App from "@/pages/04_sample";

it("try getByTestId", () => {
  render(<App />);
  // NOTE:Cypressのdata-cyと同じ感じ。https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
  const element = screen.getByTestId("test");
  expect(element).toBeInTheDocument();
});
