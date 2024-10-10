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
  test("Add item to cart when user is log in, increase the quantity of the product added and buy it ", async ({
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

    const avatar = page.getByTestId("AccountCircleIcon").nth(1);

    await expect(avatar).toBeVisible();

    await page.locator("button").first().click();
    await cartPage.visit();

    const item = page.getByText("-1+ Fjallraven - Foldsack No");
    expect(item).toBeVisible();

    await page.getByText("+").click();
    await page.getByText("+").click();

    await page.getByRole("button", { name: "Buy" }).click();
    await page.getByLabel("Name", { exact: true }).click();
    await page.getByLabel("Name", { exact: true }).fill("Matt");
    await cartPage.enterAddressValue("Surname", "Doe");
    await cartPage.enterAddressValue("Email", "example@gmail.com");
    await cartPage.enterAddressValue("Phone number", "321321321");
    await cartPage.enterAddressValue("Street", "Sunny");
    await cartPage.enterAddressValue("House number", "12");
    await cartPage.enterAddressValue("Apartment number", "2");
    await cartPage.enterAddressValue("Zip-Code", "20-200");
    await cartPage.enterAddressValue("City", "Warsaw");

    await cartPage.buttonClick("Pay on delivery");
    await cartPage.buttonClick("Confirm");
    await cartPage.buttonClick("Pay");

    const success = page.getByText("Congratulations!You have made");
    expect(success).toBeVisible();

    await cartPage.buttonClick("back to main page");
    expect(mainPage.verifyURL("/"));
  });
});
