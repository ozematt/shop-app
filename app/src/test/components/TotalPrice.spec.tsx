import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../../redux/cart/cartSlice";
import { TotalPrice } from "../../components/TotalPrice";
import { MemoryRouter } from "react-router-dom";

// helper function to render a component from Redux Store
function renderWithProvider(
  ui: React.ReactElement,
  { store } = { store: configureStore({ reducer: { cart: cartSliceReducer } }) }
) {
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("<TotalPrice />", () => {
  test("should display total price with proper button text", () => {
    const store = configureStore({
      reducer: {
        cart: cartSliceReducer,
      },
    });

    renderWithProvider(
      <MemoryRouter>
        <TotalPrice
          handleButtonClick={vi.fn()}
          title="Total Price:"
          buttonText="PAY"
          buttonType="button"
        />
      </MemoryRouter>,
      { store }
    );

    const button = screen.getByRole("button", { name: "PAY" });
    expect(button).toBeInTheDocument();
  });
});
