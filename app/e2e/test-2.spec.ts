import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByText("LOGIN").nth(1).click();
  await page.getByLabel("Login").click();
  await page.getByLabel("Login").fill("mor_2314");
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("83r5^_");
  await page.getByRole("button", { name: "Login" }).click();
  await page.locator("button").first().click();
  await page
    .locator("div:nth-child(2) > div:nth-child(4) > .MuiButtonBase-root")
    .click();
  await page
    .locator("div:nth-child(3) > div:nth-child(4) > .MuiButtonBase-root")
    .click();
  await page
    .locator("div:nth-child(3) > div:nth-child(4) > .MuiButtonBase-root")
    .click();
  await page.getByRole("link", { name: "View Cart" }).nth(1).click();
  await page.getByText("-1+ Fjallraven - Foldsack No").click();
  await page.getByText("-1+ Mens Casual Premium Slim").click();
  await page.getByText("-2+ Mens Cotton JacketPrice:").click();
});
