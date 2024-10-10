import { render, screen } from "@testing-library/react";
import { Success } from "../../pages/Success";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
//
////TESTS
describe("<Success />", () => {
  test("displaying a success message", () => {
    render(
      <MemoryRouter>
        <Success />
      </MemoryRouter>
    );
    const text = screen.getByText("Congratulations!");
    expect(text).toBeInTheDocument();
  });
});
