import { test as base, expect } from "@playwright/test";
import { Login, injectLoginPage } from "./pages/Login.mts";
import { Main, injectMainPage } from "./pages/Main.mts";
import { Cart, injectCartPage } from "./pages/Cart.mts";
import { validUser } from "./fixtures/userFixtures";
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
test.describe("Order history flow", () => {
  test("log in and go to order history ", async ({
    loginPage,
    mainPage,
    page,
  }) => {
    await mainPage.visit();
    await page.getByText("LOGIN").nth(1).click();
    await mainPage.verifyURL("/login");

    await loginPage.enterUserLogin(validUser.username);
    await loginPage.enterPassword(validUser.password);
    await loginPage.clickLogin();

    await page.getByTestId("AccountCircleIcon").nth(1).click();

    const ordersMenuItem = page
      .getByRole("menuitem", { name: "Orders" })
      .nth(0);

    await ordersMenuItem.click({ force: true });

    const emptyOrderHistoryMgs = page
      .locator("h3:has-text('You do not have any previous orders...')")
      .nth(0);

    await emptyOrderHistoryMgs.waitFor({ state: "visible" });

    await expect(emptyOrderHistoryMgs).toBeVisible();
  });
  test("buy an item and check order history", async ({
    loginPage,
    mainPage,
    page,
    cartPage,
    finalizationPage,
  }) => {
    await mainPage.visit();
    await page.getByText("LOGIN").nth(1).click();
    await mainPage.verifyURL("/login");

    await loginPage.enterUserLogin(validUser.username);
    await loginPage.enterPassword(validUser.password);
    await loginPage.clickLogin();

    await page.locator("button").first().click();
    await cartPage.visit();

    const item = page.getByText("-1+ Fjallraven - Foldsack No");
    expect(item).toBeVisible();

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
    await finalizationPage.buttonClick("Pay");

    const success = page.getByText("Congratulations!You have made");
    expect(success).toBeVisible();

    await page.getByTestId("AccountCircleIcon").click();

    const ordersMenuItem = page
      .getByRole("menuitem", { name: "Orders" })
      .nth(0);
    await ordersMenuItem.click({ force: true });

    const orderData = page.locator('h5:has-text("Purchase date:")');
    expect(orderData).toBeVisible();
  });
});
