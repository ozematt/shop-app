import { render, screen } from "@testing-library/react";
import { TitleBar } from "../../components/TitleBar";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../../redux/cart/cartSlice";

// helper function to render a component from Redux Store
function renderWithProvider(
  ui: React.ReactElement,
  { store } = { store: configureStore({ reducer: { cart: cartSliceReducer } }) }
) {
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("<TitleBar />", () => {
  test("should display bar with proper text ane without button", () => {
    render(<TitleBar title="PAYMENT SUMMERY:" />);

    const bar = screen.getByText("PAYMENT SUMMERY:");
    const button = screen.queryByRole("button", { name: "Delete Cart" });

    expect(bar).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
  test("should display bar with proper text ane with button", () => {
    const store = configureStore({
      reducer: {
        cart: cartSliceReducer,
      },
    });

    renderWithProvider(<TitleBar title="Your Cart:" buttonShow={true} />, {
      store,
    });

    const bar = screen.getByText("Your Cart:");
    const button = screen.getByRole("button", { name: "Delete Cart" });

    expect(bar).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
