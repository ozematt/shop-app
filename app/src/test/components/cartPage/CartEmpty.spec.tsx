import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { CartEmpty } from "../../../components/cartPage/CartEmpty";

describe("<OrdersEmpty />", () => {
  test("displaying a empty cart message", () => {
    render(
      <MemoryRouter>
        <CartEmpty />
      </MemoryRouter>
    );
    const text = screen.getByText("Your cart is empty!");
    expect(text).toBeInTheDocument();
  });
});
