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

  async visit(): Promise<void> {
    await this.page.getByRole("link", { name: "View Cart" }).nth(1).click();
  }
  async enterAddressValue(name: string, value: string) {
    const input = this.page.getByLabel(name);

    await input.click();
    await input.fill(value);
  }
  async buttonClick(name: string) {
    await this.page.getByRole("button", { name: name }).click();
  }
}
