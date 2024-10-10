import { expect } from "vitest";
import { describe } from "vitest";
import fetchProducts from "../../api/queries/products";
import productsTest from "../../_mocks_/fixtures/productsTest.json";

describe("fetchProducts function", () => {
  it("should fetch correct data", async () => {
    expect(await fetchProducts()).toEqual(productsTest);
  });
});
