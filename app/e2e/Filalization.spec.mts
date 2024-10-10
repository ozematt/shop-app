import { test as base, expect } from "@playwright/test";
import { Login, injectLoginPage } from "./pages/Login.mts";
import { Main, injectMainPage } from "./pages/Main.mts";
import { Cart, injectCartPage } from "./pages/Cart.mts";
import { validUser, invalidUser } from "./fixtures/userFixtures";

interface TestFixtures {
  cartPage: Cart;
  loginPage: Login;
  mainPage: Main;
}

const test = base.extend<TestFixtures>({
  cartPage: injectCartPage,
  loginPage: injectLoginPage,
  mainPage: injectMainPage,
});

test.describe("Finalization page", () => {
  test("do not enter any data and click on the button 'confirm' ", async ({
    cartPage,
    mainPage,
    page,
  }) => {
    await page.goto("/finalization");
    await cartPage.buttonClick("Confirm");
    expect(mainPage.verifyURL("/finalization"));
    const errorPaymentMethod = page.getByText("Please select a payment");
    expect(errorPaymentMethod).toBeVisible();
  });
  test("do not enter address data, choose 'pay on delivery' payment method and click on the button 'confirm' ", async ({
    cartPage,
    mainPage,
    page,
  }) => {
    await page.goto("/finalization");
  });
});
