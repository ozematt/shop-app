import { render, screen } from "@testing-library/react";
import * as useAuthorizationFile from "../../lib/hooks/pages/useAuthorization";
import { vi } from "vitest";
import { Authorization } from "../../pages/Authorization";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../../redux/user/userSlice";
import cartSliceReducer from "../../redux/cart/cartSlice";
import productsSliceReducer from "../../redux/products/productsSlice";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const useAuthorizationSpy = vi.spyOn(useAuthorizationFile, "useAuthorization");

const mockHandleLogin = vi.fn();
const mockSetUsername = vi.fn();
const mockSetPassword = vi.fn();
const mockNavigate = vi.fn();
const mockHandleClickShowPassword = vi.fn();
const mockHandleMouseDownPassword = vi.fn();
const mockHandleMouseUpPassword = vi.fn();

const mockUseAuthorization = ({
  username = "",
  password = "",
  mutation = { isPending: false },
  errorAuth = "",
  handleLogin = mockHandleLogin,
  setUsername = mockSetUsername,
  setPassword = mockSetPassword,
  navigate = mockNavigate,
  showPassword = false,
  handleClickShowPassword = mockHandleClickShowPassword,
  handleMouseDownPassword = mockHandleMouseDownPassword,
  handleMouseUpPassword = mockHandleMouseUpPassword,
}) => {
  useAuthorizationSpy.mockReturnValue({
    username,
    setUsername,
    mutation,
    errorAuth,
    handleLogin,
    navigate,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    password,
    setPassword,
  });
};

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
describe("<Authorization />", () => {
  afterAll(() => {
    useAuthorizationSpy.mockRestore();
  });
  test("should display proper product", () => {
    mockUseAuthorization({ mutation: { isPending: true } });

    const store = configureStore({
      reducer: {
        user: userSliceReducer,
        products: productsSliceReducer,
        cart: cartSliceReducer,
      },
    });

    renderWithProvider(
      <MemoryRouter>
        <Authorization />
      </MemoryRouter>,
      { store }
    );

    expect(screen.queryByText("Login")).not.toBeInTheDocument();
  });
});
