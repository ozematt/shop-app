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

  test("Add item to cart when user is log in, increase the quantity of the product added and buy it ", async ({
    cartPage,
    loginPage,
    mainPage,
    finalizationPage,
    page,
  }) => {
    await mainPage.visit();
    await page.getByText("LOGIN").nth(1).click();
    await loginPage.enterUserLogin(validUser.username);
    await loginPage.enterPassword(validUser.password);
    await loginPage.clickLogin();

    const avatar = page.getByTestId("AccountCircleIcon").nth(1);

    await expect(avatar).toBeVisible();

    await page.locator("button").first().click();
    await cartPage.visit();

    const item = page.getByText("-1+ Fjallraven - Foldsack No");
    expect(item).toBeVisible();

    await page.getByText("+").click();
    await page.getByText("+").click();

    await page.getByRole("button", { name: "Buy" }).click();
    await finalizationPage.enterFormValue("Name", "Matt");
    await finalizationPage.enterFormValue("Surname", "Doe");
    await finalizationPage.enterFormValue("Email", "example@gmail.com");
    await finalizationPage.enterFormValue("Phone number", "321321321");
    await finalizationPage.enterFormValue("Street", "Sunny");
    await finalizationPage.enterFormValue("House number", "12");
    await finalizationPage.enterFormValue("Apartment number", "2");
    await finalizationPage.enterFormValue("Zip-Code", "20-200");
    await finalizationPage.enterFormValue("City", "Warsaw");

    await finalizationPage.buttonPayOnDeliveryClick();
    await finalizationPage.buttonConfirmClick();
    await finalizationPage.buttonClick("Pay"); //summary

    const success = page.getByText("Congratulations!You have made");
    expect(success).toBeVisible();

    await cartPage.buttonClick("back to main page");
    expect(mainPage.verifyURL("/"));
  });
});
