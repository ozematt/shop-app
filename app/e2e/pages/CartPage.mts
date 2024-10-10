import { Page } from "playwright";
import { Common } from "./Common.mts";

export const injectCartPage = async (
  { page }: { page: Page },
  use: (page: CartPage) => Promise<void>
) => await use(new CartPage(page));

export class CartPage extends Common {
  constructor(page: Page) {
    super(page);
  }
  async enterUserLogin(value: string): Promise<void> {
    await this.fillInput("Login", value);
  }
  async enterPassword(value: string): Promise<void> {
    await this.fillInput("Password", value);
  }
  async clickLogin(): Promise<void> {
    await this.clickButton("Login");
  }
}
