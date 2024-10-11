import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { OrdersEmpty } from "../../components/ordersHistoryPage/OrdersEmpty";
//
////TESTS
describe("<OrdersEmpty />", () => {
  test("displaying a empty orders history message", () => {
    render(
      <MemoryRouter>
        <OrdersEmpty />
      </MemoryRouter>
    );
    const text = screen.getByText("You do not have any previous orders...");
    expect(text).toBeInTheDocument();
  });
});
