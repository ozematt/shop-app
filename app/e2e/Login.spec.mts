import { test as base, expect } from "@playwright/test";
import { Login, injectLoginPage } from "./pages/Login.mts";
import { Main, injectMainPage } from "./pages/Main.mts";
import { validUser, invalidUser } from "./fixtures/userFixtures";

type TestFixtures = {
  loginPage: Login;
  mainPage: Main;
};

const test = base.extend<TestFixtures>({
  loginPage: injectLoginPage,
  mainPage: injectMainPage,
});
//
////TESTS
test.describe("Login flow", () => {
  test("Go to login page, submit form with valid data, verify redirection", async ({
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

    const avatar = page.getByTestId("AccountCircleIcon").nth(1);
    await expect(avatar).toBeVisible();
  });
  test("Go to login page, submit form with incorrect data, checking for error occurrence", async ({
    page,
    loginPage,
    mainPage,
  }) => {
    await mainPage.visit();
    await page.getByText("LOGIN").nth(1).click();

    await loginPage.enterUserLogin(invalidUser.username);
    await loginPage.enterPassword(invalidUser.password);
    await loginPage.clickLogin();

    const errorMessage = page.getByText("User does not exist");
    await expect(errorMessage).toBeVisible();
  });
  test("Go to login page, checking redirection to main page button", async ({
    page,
    mainPage,
  }) => {
    await mainPage.visit();
    await page.getByText("LOGIN").nth(1).click();
    await page.getByRole("button", { name: "main page" }).click();

    await expect(page).toHaveURL("/");
  });
});
