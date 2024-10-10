import { test as base, expect } from "@playwright/test";
import { Login, injectLoginPage } from "./pages/Login.mts";
import { Main, injectMainPage } from "./pages/Main.mts";
import { Cart, injectCartPage } from "./pages/Cart.mts";

import { Finalization, injectFinalizationPage } from "./pages/Finalization.mts";

interface TestFixtures {
  cartPage: Cart;
  loginPage: Login;
  mainPage: Main;
  finalizationPage: Finalization;
}

const test = base.extend<TestFixtures>({
  cartPage: injectCartPage,
  loginPage: injectLoginPage,
  mainPage: injectMainPage,
  finalizationPage: injectFinalizationPage,
});
//
////TESTS
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
    finalizationPage,
    page,
  }) => {
    await finalizationPage.visit();
    await finalizationPage.buttonPayOnDeliveryClick();
    await finalizationPage.buttonConfirmClick();
    const errorAddressMgs = page.getByText("Address is required");
    expect(errorAddressMgs).toBeVisible();
  });
  test("choose 'Payment card' payment method and click 'Add card' without form fill", async ({
    finalizationPage,
    page,
  }) => {
    await finalizationPage.visit();
    await finalizationPage.buttonPaymentCardClick();

    await finalizationPage.buttonConfirmClick();
    const errorAddressMgs = page.getByText("Address is required");
    expect(errorAddressMgs).toBeVisible();
  });
});
