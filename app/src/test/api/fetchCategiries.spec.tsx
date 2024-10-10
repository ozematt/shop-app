import { expect } from "vitest";
import { describe } from "vitest";
import categoriesTest from "../../_mocks_/fixtures/categoriesTest.json";
import fetchCategories from "../../api/queries/categories";

describe("fetchCategories function", () => {
  it("should fetch correct data", async () => {
    expect(await fetchCategories()).toEqual({ categoriesTest });
  });
});
