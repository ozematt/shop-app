import { expect } from "vitest";
import { describe } from "vitest";
import fetchProducts from "../../api/queries/products";
import { productsItemsTest } from "../../_mocks_/data";

describe("fetchProducts function", () => {
  it("should fetch correct data", async () => {
    expect(await fetchProducts()).toEqual({ productsItemsTest });
  });
});
