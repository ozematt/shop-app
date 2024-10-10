import { test as base, expect } from "@playwright/test";
import { LoginPage, injectLoginPage } from "./pages/LoginPage.mts";
import { Main, injectMainPage } from "./pages/Main.mts";
import { CartPage, injectCartPage } from "./pages/CartPage.mts";

interface TestFixtures {
  cartPage: CartPage;
  loginPage: LoginPage;
  main: Main;
}

const test = base.extend<TestFixtures>({
  cartPage: injectCartPage,
  loginPage: injectLoginPage,
  main: injectMainPage,
});

test.describe("Cart flow", () => {
  test("Go to cart page, verify redirection and empty cart ", async ({
    cartPage,
    loginPage,
    main,
    page,
  }) => {
    await main.mainPage();
    await cartPage.visit();
    await main.pageURL("/cart");

    expect(
      page.getByRole("heading", { name: "Your cart is empty!" })
    ).toBeVisible();
    expect(page.getByRole("img")).toBeVisible();
  });
});
