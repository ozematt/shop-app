import { render, screen } from "@testing-library/react";
import { TitleBar } from "../../components/TitleBar";
import { expect } from "vitest";

describe("<TitleBar />", () => {
  test("should display bar with proper text ane without button", () => {
    render(<TitleBar title="Your Cart:" />);

    const bar = screen.getByText("Your Cart:");
    const button = screen.queryByRole("button", { name: "Delete Cart" });
    expect(bar).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
