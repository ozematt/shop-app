import { test as base, expect } from "@playwright/test";
import { Login, injectLoginPage } from "./pages/Login.mts";
import { Main, injectMainPage } from "./pages/Main.mts";
import { validUser } from "./fixtures/userFixtures";

interface TestFixtures {
  loginPage: Login;
  mainPage: Main;
}

const test = base.extend<TestFixtures>({
  loginPage: injectLoginPage,
  mainPage: injectMainPage,
});
//
////TESTS
test.describe("Logout flow", () => {
  test("Log in user and log out", async ({ loginPage, mainPage, page }) => {
    await mainPage.visit();
    await page.getByText("LOGIN").nth(1).click();

    await mainPage.verifyURL("/login");

    await loginPage.enterUserLogin(validUser.username);
    await loginPage.enterPassword(validUser.password);
    await loginPage.clickLogin();

    const avatar = page.getByTestId("AccountCircleIcon").nth(1);
    await expect(avatar).toBeVisible();

    await avatar.click();
    await page.getByRole("menuitem", { name: "LogOut" }).click();
    const logoutMessage = page
      .locator("div")
      .filter({ hasText: "You have been successfully" })
      .nth(1);

    expect(logoutMessage).toBeVisible();
    await page.getByRole("button", { name: "Close" }).click();
    await mainPage.verifyURL("/");
  });
});
