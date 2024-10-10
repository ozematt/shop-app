import { test as base, expect } from "@playwright/test";
import { LoginPage, injectLoginPage } from "./pages/LoginPage.mts";
import { MainPage, injectMainPage } from "./pages/Main.mts";
import { CartPage, injectCartPage } from "./pages/CartPage.mts";
import { validUser, invalidUser } from "./fixtures/userFixtures";

interface TestFixtures {
  cartPage: CartPage;
  loginPage: LoginPage;
  mainPage: MainPage;
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
    await mainPage.pageURL("/cart");

    expect(
      page.getByRole("heading", { name: "Your cart is empty!" })
    ).toBeVisible();
    expect(page.getByRole("img")).toBeVisible();
  });
  test("Add to cart when user is not log in", async ({ mainPage, page }) => {
    await mainPage.visit();
    await page.locator("button").first().click();
    expect(mainPage.pageURL("/login"));
  });
  test("Add item to cart when user is log in", async ({
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
  });
});
