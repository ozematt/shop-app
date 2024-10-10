import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByText("LOGIN").nth(1).click();
  await page.getByLabel("Login").click();
  await page.getByLabel("Login").fill("mor_2314");
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("83r5^_");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByTestId("AccountCircleIcon").nth(1).click();
  await page.getByRole("menuitem", { name: "LogOut" }).click();

  await page
    .getByRole("heading", { name: "You have been successfully" })
    .click();
  await page.getByRole("button", { name: "Close" }).click();
});
