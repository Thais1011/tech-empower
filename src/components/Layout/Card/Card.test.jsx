import { render, screen } from "@testing-library/react";
import Card from "./Card";

it("renders card component with correct class name", () => {
  render(<Card>Test Content</Card>);
  const cardElement = screen.getByText("Test Content");
  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveClass("card");
});
