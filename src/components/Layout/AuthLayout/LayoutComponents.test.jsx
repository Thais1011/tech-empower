import { render, screen } from "@testing-library/react";
import LayoutComponents from "./LayoutComponents";

it("renders layout components with correct class names", () => {
  render(
    <LayoutComponents>
      <div>Content</div>
    </LayoutComponents>
  );

  const containerElement = screen.getByTestId("container");
  const containerLoginElement = screen.getByTestId("container-login");
  const wrapLoginElement = screen.getByTestId("wrap-login");

  expect(containerElement).toBeInTheDocument();
  expect(containerLoginElement).toBeInTheDocument();
  expect(wrapLoginElement).toBeInTheDocument();

  expect(containerElement).toHaveClass("container");
  expect(containerLoginElement).toHaveClass("container-login");
  expect(wrapLoginElement).toHaveClass("wrap-login");
});
