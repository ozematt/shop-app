import { render, screen } from "@testing-library/react";
import * as useProductDetailsFile from "../../lib/hooks/pages/useProductDetails";
import { Product } from "../../lib/types/productTypes";
import { ProductDetails } from "../../pages/ProductDetails";
import { expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../../redux/user/userSlice";
import { Provider } from "react-redux";
import productsSliceReducer from "../../redux/products/productsSlice";

const useProductDetailsSpy = vi.spyOn(
  useProductDetailsFile,
  "useProductDetails"
);

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
  handleAddToCartClick = vi.fn(),
  isSmallScreen = false,
  isSmallerScreen = false,
} = {}) => {
  useProductDetailsSpy.mockReturnValue({
    product,
    handleAddToCartClick,
    isSmallScreen,
    isSmallerScreen,
  });
};

// helper function to render a component from Redux Store
function renderWithProvider(
  ui: React.ReactElement,
  { store } = {
    store: configureStore({
      reducer: { user: userSliceReducer, products: productsSliceReducer },
    }),
  }
) {
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("<ProductDetails />", () => {
  afterAll(() => {
    useProductDetailsSpy.mockRestore();
  });
  test("should display proper product", () => {
    mockUseProductDetails();

    const store = configureStore({
      reducer: {
        user: userSliceReducer,
        products: productsSliceReducer,
      },
    });
    renderWithProvider(<ProductDetails />, { store });

    expect(screen.getByText("Product1")).toBeInTheDocument();
  });
});
