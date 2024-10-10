import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/finalization");
  await page.getByRole("button", { name: "Pay on delivery" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await page.getByText("Address is required").click();
  await page.getByLabel("Name", { exact: true }).click();
  await page.getByLabel("Name", { exact: true }).fill("Maa");
  await page.getByLabel("Surname").click();
  await page.getByLabel("Surname").click();
  await page.getByLabel("Surname").fill("as");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("expample@gmail.com");
  await page.getByLabel("Phone number").click();
  await page.getByLabel("Phone number").fill("213213213");
  await page.getByLabel("Street").click();
  await page.getByLabel("Street").fill("aa");
  await page.getByLabel("House number").click();
  await page.getByLabel("House number").fill("12");
  await page.getByLabel("Zip-Code").click();
  await page.getByLabel("Zip-Code").fill("12-123");
  await page.getByLabel("City").click();
  await page.getByLabel("City").fill("www");
  await page.getByRole("button", { name: "Confirm" }).click();
  await page.getByRole("heading", { name: "PAYMENT SUMMERY:" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^2\. Payment method:Edit$/ })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "Payment card" }).click();
  await page.getByRole("button", { name: "Add Card" }).click();
  await page.getByLabel("Credit card number").click();
  await page.getByLabel("Credit card number").fill("12345678987654");
  await page.getByLabel("Valid Thru").click();
  await page.getByLabel("Valid Thru").fill("12/12");
  await page.getByLabel("CVV").click();
  await page.getByLabel("CVV").fill("111");
  await page.getByRole("button", { name: "Add Card" }).click();
  await page.getByRole("heading", { name: "Card Added !" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();
  await page.getByRole("heading", { name: "PAYMENT SUMMERY:" }).click();
  await page.getByRole("button", { name: "Pay" }).click();
  await page.getByRole("button", { name: "back to main page" }).click();
  await page.getByRole("link", { name: "SKLEP.COM" }).nth(1).click();
});
