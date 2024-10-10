import { test as base, expect } from "@playwright/test";
import { LoginPage, injectLoginPage } from "./pages/LoginPage.mts";
import { Main, injectMainPage } from "./pages/Main.mts";

interface TestFixtures {
  loginPage: LoginPage;
  main: Main;
}

const test = base.extend<TestFixtures>({
  loginPage: injectLoginPage,
  main: injectMainPage,
});

test.describe("Login flow", () => {
  test("Go to login page, submit form with valid data, verify redirection", async ({
    loginPage,
    main,
    page,
  }) => {
    await main.navigate();
    await page.getByText("LOGIN").nth(1).click();
    await expect(page).toHaveURL("/login");

    await loginPage.enterUserLogin("mor_2314");
    await loginPage.enterPassword("83r5^_");
    await loginPage.clickLogin();

    const avatar = page.getByTestId("AccountCircleIcon").nth(1);
    await expect(avatar).toBeVisible();
  });
  test("Go to login page, submit form with incorrect data, checking for error occurrence", async ({
    page,
    loginPage,
    main,
  }) => {
    await main.navigate();
    await page.getByText("LOGIN").nth(1).click();

    await loginPage.enterUserLogin("wrong_user");
    await loginPage.enterPassword("wrong_password");
    await loginPage.clickLogin();

    const errorMessage = page.getByText("User does not exist");
    await expect(errorMessage).toBeVisible();
  });
  test("Go to login page, checking redirection to main page button", async ({
    page,
    loginPage,
    main,
  }) => {
    await main.navigate();
    await page.getByText("LOGIN").nth(1).click();
    await page.getByRole("button", { name: "main page" }).click();

    await expect(page).toHaveURL("/");
  });
});
