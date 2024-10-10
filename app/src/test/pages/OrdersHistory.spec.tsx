import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../../redux/user/userSlice";
import { OrdersHistory } from "../../pages/OrdersHistory";

// helper function to render a component from Redux Store
function renderWithProvider(
  ui: React.ReactElement,
  { store } = { store: configureStore({ reducer: { user: userSliceReducer } }) }
) {
  return render(<Provider store={store}>{ui}</Provider>);
}
//
////TESTS
describe("<OrdersHistory />", () => {
  test("should display title", () => {
    const store = configureStore({
      reducer: {
        user: userSliceReducer,
      },
    });
    renderWithProvider(<OrdersHistory />, { store });

    const title = screen.getByText("Yours orders history:");
    expect(title).toBeInTheDocument();
  });
});
