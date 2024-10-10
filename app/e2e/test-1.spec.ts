import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Search…").nth(1).click();
  await page.getByPlaceholder("Search…").nth(1).fill("Mens Casual Premium");
  await page
    .getByRole("option", { name: "Mens Casual Premium Slim Fit" })
    .click();
  await page
    .getByText(
      "Mens Casual Premium Slim Fit T-Shirts Category: men's clothingPrice: 22.3 $ 4.1"
    )
    .click();
  await page.getByRole("button", { name: "main page" }).click();
});
