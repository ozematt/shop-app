import { test as base, expect } from "@playwright/test";
import { MainPage, injectMainPage } from "./pages/Main.mts";
import { SearchPage, injectSearchPage } from "./pages/Search.mts";

interface TestFixtures {
  searchPage: SearchPage;
  mainPage: MainPage;
}

const test = base.extend<TestFixtures>({
  searchPage: injectSearchPage,
  mainPage: injectMainPage,
});

test.describe("Search flow", () => {
  test("searching for an element using the search engine, selecting the found element, going to the view of the found element", async ({
    page,
    mainPage,
    searchPage,
  }) => {
    await mainPage.visit();

    await searchPage.searchEngine("Mens Casual Premium");

    await page
      .getByRole("option", { name: "Mens Casual Premium Slim Fit" })
      .click();

    const searchedItem = page.getByText(
      "Mens Casual Premium Slim Fit T-Shirts Category: men's clothingPrice: 22.3 $ 4.1"
    );
    expect(searchedItem).toBeVisible();
  });
});
