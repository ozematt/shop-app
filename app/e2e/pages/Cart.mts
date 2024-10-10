import { Page } from "playwright";
import { Common } from "./Common.mts";

export const injectCartPage = async (
  { page }: { page: Page },
  use: (page: Cart) => Promise<void>
) => await use(new Cart(page));

export class Cart extends Common {
  constructor(page: Page) {
    super(page);
  }

  async visit(): Promise<void> {
    await this.page.getByRole("link", { name: "View Cart" }).nth(1).click();
  }
  async buttonClick(name: string) {
    await this.page.getByRole("button", { name: name }).click();
  }
}
