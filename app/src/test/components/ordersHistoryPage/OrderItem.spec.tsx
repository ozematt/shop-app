import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { OrderItem } from "../../../components/ordersHistoryPage/OrderItem";
import { Orders } from "../../../lib/types/userTypes";

describe("<OrderItem />", () => {
  test("should display item", () => {
    const order: Orders = {
      id: "1",
      date: "10.10.2024",
      totalPrice: 100,
      quantity: 3,
      address: {
        name: "John",
        surname: "Doe",
        street: "Sunny",
        houseNumber: 11,
        apartmentNumber: 1,
        zipCode: "20-200",
        city: "Warsaw",
        payOnDelivery: true,
        paymentCard: null,
      },
      items: [
        {
          id: 2,
          title: "Title",
          image: "www.example.com",
          price: 100,
          pieces: 2,
        },
      ],
    };
    render(<OrderItem order={order} />);

    expect(screen.getByText("10.10.2024")).toBeInTheDocument();
  });
});
