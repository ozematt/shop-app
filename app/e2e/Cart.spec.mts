import { test as base, expect } from "@playwright/test";
import { Login, injectLoginPage } from "./pages/Login.mts";
import { Main, injectMainPage } from "./pages/Main.mts";
import { Cart, injectCartPage } from "./pages/Cart.mts";
import { validUser } from "./fixtures/userFixtures";
import { Finalization, injectFinalizationPage } from "./pages/Finalization.mts";

type TestFixtures = {
  cartPage: Cart;
  loginPage: Login;
  mainPage: Main;
  finalizationPage: Finalization;
};

const test = base.extend<TestFixtures>({
  cartPage: injectCartPage,
  loginPage: injectLoginPage,
  mainPage: injectMainPage,
  finalizationPage: injectFinalizationPage,
});
//
////TESTS
test.describe("Cart flow", () => {
  test("Go to cart page, verify redirection and message empty cart ", async ({
    cartPage,
    mainPage,
    page,
  }) => {
    await mainPage.visit();
    await cartPage.visit();
    await mainPage.verifyURL("/cart");

    expect(
      page.getByRole("heading", { name: "Your cart is empty!" })
    ).toBeVisible();
    expect(page.getByRole("img")).toBeVisible();
  });
  test("Add to cart when user is not log in", async ({ mainPage, page }) => {
    await mainPage.visit();
    await page.locator("button").first().click();
    expect(mainPage.verifyURL("/login"));
  });
  test("Add items to cart when user is log in, increase the quantity of the product, delete product and all cart ", async ({
    cartPage,
    loginPage,
    mainPage,
    page,
  }) => {
    await mainPage.visit();
    await page.getByText("LOGIN").nth(1).click();
    await loginPage.enterUserLogin(validUser.username);
    await loginPage.enterPassword(validUser.password);
    await loginPage.clickLogin();

    await page.locator("button").first().click();
    await page
      .locator("div:nth-child(2) > div:nth-child(4) > .MuiButtonBase-root")
      .click();
    await page
      .locator("div:nth-child(3) > div:nth-child(4) > .MuiButtonBase-root")
      .click();
    await cartPage.visit();

    await page.getByRole("button", { name: "Delete Cart" }).click();
    expect(
      page.getByRole("heading", { name: "Your cart is empty!" })
    ).toBeVisible();
    expect(page.getByRole("img")).toBeVisible();
  });
});
