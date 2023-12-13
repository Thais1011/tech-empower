import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

it("renders banner component with correct alt text", () => {
  render(<Banner />);
  const bannerElement = screen.getByAltText("banner");
  expect(bannerElement).toBeInTheDocument();
});
