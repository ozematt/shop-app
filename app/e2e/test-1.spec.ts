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

  await page.getByRole("menuitem", { name: "Orders" }).click();

  await page.getByRole("heading", { name: "Yours orders history:" }).click();
  await page
    .getByRole("heading", { name: "You don't have any previous" })
    .click();
  await page.getByRole("link", { name: "SKLEP.COM" }).click();
  await page.locator("button").first().click();
  await page
    .locator("div:nth-child(2) > div:nth-child(4) > .MuiButtonBase-root")
    .click();
  await page.getByRole("link", { name: "View Cart" }).nth(1).click();
  await page.getByRole("button", { name: "Buy" }).click();
  await page.getByLabel("Name", { exact: true }).click();
  await page.getByLabel("Name", { exact: true }).fill("asa");
  await page.getByLabel("Surname").click();
  await page.getByLabel("Surname").fill("a");
  await page.getByLabel("Surname").click();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("ahsha@gmail.com");
  await page.getByLabel("Phone number").click();
  await page.getByLabel("Phone number").fill("213213213");
  await page.getByLabel("Street").click();
  await page.getByLabel("Street").fill("as");
  await page.getByLabel("House number").click();
  await page.getByLabel("House number").fill("12");
  await page.getByLabel("Zip-Code").click();
  await page.getByLabel("Zip-Code").fill("12-123");
  await page.getByLabel("City").click();
  await page.getByLabel("City").fill("aa");
  await page.getByRole("button", { name: "Pay on delivery" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await page.getByRole("button", { name: "Pay" }).click();
  await page.getByRole("button", { name: "back to main page" }).click();
  await page
    .locator("header")
    .filter({ hasText: "SKLEP.COMCategoryCategorySortFilter0" })
    .getByTestId("AccountCircleIcon")
    .locator("path")
    .click();
  await page.getByRole("heading", { name: "Purchase date:" }).click();
});
