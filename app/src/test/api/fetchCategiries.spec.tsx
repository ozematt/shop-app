import { expect } from "vitest";
import { describe } from "vitest";
import { categoriesTest } from "../../_mocks_/data";
import fetchCategories from "../../api/queries/categories";

describe("fetchCategories function", () => {
  it("should fetch correct data", async () => {
    expect(await fetchCategories()).toEqual({ categoriesTest });
  });
});
