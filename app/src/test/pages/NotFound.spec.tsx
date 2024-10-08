import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { NotFound } from "../../pages/NotFound";

describe("<NotFound />", () => {
  test("should display message", () => {
    render(<NotFound />);
    expect(screen.getByText("404 Not Found")).toBeInTheDocument();
  });
});
