import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/finalization");
  await page.getByRole("button", { name: "Confirm" }).click();
  await page.getByText("Please select a payment").click();
});
