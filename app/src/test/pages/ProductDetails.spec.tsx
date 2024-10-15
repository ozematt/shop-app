import { render, screen } from "@testing-library/react";
import * as useProductDetailsFile from "../../lib/hooks/pages/useProductDetails";
import { Product } from "../../lib/types/productTypes";
import { ProductDetails } from "../../pages/ProductDetails";
import { expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../../redux/user/userSlice";
import { Provider } from "react-redux";
import productsSliceReducer from "../../redux/products/productsSlice";
import { MemoryRouter } from "react-router-dom";

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
//
////TEST
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

    renderWithProvider(
      <MemoryRouter>
        <ProductDetails />
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByText("Product1")).toBeInTheDocument();
  });
});
