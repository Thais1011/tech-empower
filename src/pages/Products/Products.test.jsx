import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext } from "../../store/cart-context";
import { Products } from "./Products";

it("renders products component with correct data", async () => {
  const mockProducts = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      images: ["image1.jpg"],
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
      images: ["image2.jpg"],
    },
  ];

  const mockAddItem = jest.fn();

  render(
    <CartContext.Provider value={{ addItem: mockAddItem }}>
      <Products />
    </CartContext.Provider>
  );

  // Wait for products to be fetched and rendered
  await screen.findByText("Product 1");
  await screen.findByText("Product 2");

  const product1Element = screen.getByText("Product 1");
  const product2Element = screen.getByText("Product 2");

  expect(product1Element).toBeInTheDocument();
  expect(product2Element).toBeInTheDocument();

  fireEvent.click(product1Element);

  expect(mockAddItem).toHaveBeenCalledWith({
    id: 1,
    title: "Product 1",
    price: 10,
    images: ["image1.jpg"],
    amount: 1,
  });
});
