import { render, screen } from "@testing-library/react";
import * as useCartFile from "../../lib/hooks/pages/useCart";
import { expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../../redux/user/userSlice";
import cartSliceReducer from "../../redux/cart/cartSlice";
import { Provider } from "react-redux";
import productsSliceReducer from "../../redux/products/productsSlice";
import { MemoryRouter } from "react-router-dom";
import { CartProduct } from "../../lib/types/cartTypes";
import { Cart } from "../../pages/Cart";

const useCartSpy = vi.spyOn(useCartFile, "useCart");

const mockUseCart = ({
  cart = [
    {
      id: 1,
      title: "Product-01",
      image: "www.example.com",
      price: 25,
      pieces: 2,
    },
  ] as CartProduct[],
  isSmallScreen = false,
  handleBuyButton = vi.fn,
}) => {
  useCartSpy.mockReturnValue({ cart, isSmallScreen, handleBuyButton });
};

// helper function to render a component from Redux Store
function renderWithProvider(
  ui: React.ReactElement,
  { store } = {
    store: configureStore({
      reducer: {
        user: userSliceReducer,
        products: productsSliceReducer,
        cart: cartSliceReducer,
      },
    }),
  }
) {
  return render(<Provider store={store}>{ui}</Provider>);
}

//
////TEST
describe("<Cart />", () => {
  afterAll(() => {
    useCartSpy.mockRestore();
  });
  test("should display proper product", () => {
    mockUseCart({});

    const store = configureStore({
      reducer: {
        user: userSliceReducer,
        products: productsSliceReducer,
        cart: cartSliceReducer,
      },
    });

    renderWithProvider(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByText("Product-01")).toBeInTheDocument();
  });
});
