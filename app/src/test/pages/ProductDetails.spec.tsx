import { render, screen } from "@testing-library/react";
import * as useProductDetailsFile from "../../lib/hooks/useProductDetails";
import { Product } from "../../lib/types/productTypes";
import { ProductDetails } from "../../pages/ProductDetails";
import { expect } from "vitest";

const useProductDetailsSpy = vi.spyOn(
  useProductDetailsFile,
  "useProductDetails"
);

const handleClick = vi.fn();
const nav = vi.fn();

const mockUseProductDetails = ({
  product = {
    id: 1,
    title: "Product1",
    price: 20,
    category: "electronic",
    description: "Description...",
    image: "www.example.com",
    rating: { rate: 5, count: 10 },
  } as Product,
  handleAddToCartClick = handleClick,
  navigate = nav,
} = {}) => {
  useProductDetailsSpy.mockReturnValue({
    product,
    handleAddToCartClick,
    navigate,
  });
};

describe("<ProductDetails />", () => {
  afterAll(() => {
    useProductDetailsSpy.mockRestore();
  });
  test("should display proper product", () => {
    mockUseProductDetails();
    render(<ProductDetails />);
    expect(screen.getByText("Product1")).toBeInTheDocument();
  });
});
