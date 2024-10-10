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

    const cardWindow = page.getByRole("heading", { name: "Enter your Card:" });
    expect(cardWindow).toBeVisible();

    await finalizationPage.buttonAddCardClick();
    const errorAddressMgs = page.getByText("Please fill in the fields.");
    expect(errorAddressMgs).toBeVisible();
  });
  test("choose 'Payment card' payment method and click 'Add card' after fill card form", async ({
    finalizationPage,
    page,
  }) => {
    await finalizationPage.visit();
    await finalizationPage.buttonPaymentCardClick();

    const cardWindow = page.getByRole("heading", { name: "Enter your Card:" });
    expect(cardWindow).toBeVisible();

    await finalizationPage.enterFormValue(
      "Credit card number",
      "142582726356283"
    );
    await finalizationPage.enterFormValue("Valid Thru", "01/05");
    await finalizationPage.enterFormValue("CVV", "987");
    await finalizationPage.buttonAddCardClick();
    const addCardSuccessMsg = page.getByRole("heading", {
      name: "Card Added !",
    });
    expect(addCardSuccessMsg).toBeVisible();
  });
  test("enter valid form data and choose payment method, click 'confirm'", async ({
    finalizationPage,
    page,
  }) => {
    await finalizationPage.visit();

    await finalizationPage.enterFormValue("Name", "Matt");
    await finalizationPage.enterFormValue("Surname", "Doe");
    await finalizationPage.enterFormValue("Email", "example@gmail.com");
    await finalizationPage.enterFormValue("Phone number", "321321321");
    await finalizationPage.enterFormValue("Street", "Sunny");
    await finalizationPage.enterFormValue("House number", "12");
    await finalizationPage.enterFormValue("Apartment number", "2");
    await finalizationPage.enterFormValue("Zip-Code", "20-200");
    await finalizationPage.enterFormValue("City", "Warsaw");

    await finalizationPage.buttonPaymentCardClick();

    const cardWindow = page.getByRole("heading", { name: "Enter your Card:" });
    expect(cardWindow).toBeVisible();

    await finalizationPage.enterFormValue(
      "Credit card number",
      "142582726356283"
    );
    await finalizationPage.enterFormValue("Valid Thru", "01/05");
    await finalizationPage.enterFormValue("CVV", "987");
    await finalizationPage.buttonAddCardClick();
    const addCardSuccessMsg = page.getByRole("heading", {
      name: "Card Added !",
    });
    expect(addCardSuccessMsg).toBeVisible();

    await finalizationPage.buttonConfirmClick();
    const summaryWindow = page.getByRole("heading", {
      name: "PAYMENT SUMMERY:",
    });
    expect(summaryWindow).toBeVisible();
  });
});
