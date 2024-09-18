import { render, screen } from "@testing-library/react";
import { App } from "../src/App";
import { expect } from "vitest";

describe("demo test", () => {
  test("demo", () => {
    render(<App />);
    const text = screen.getByRole("heading", { level: 1 });
    expect(text).toHaveTextContent("Vite + React");
  });
});
