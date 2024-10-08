import { testFn } from "./testFunction";
import { expect } from "vitest";
import { describe } from "vitest";

describe("v", () => {
  it("should", async () => {
    expect(await testFn()).toEqual({ name: "CodersLab" });
  });
});
