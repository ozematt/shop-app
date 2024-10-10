import { Page } from "playwright";

export abstract class Common {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async fillInput(name: string, value: string): Promise<void> {
    await this.page.getByRole("textbox", { name: `${name}` }).fill(value);
  }
  async clickButton(name: string) {
    await this.page.getByRole("button", { name: `${name}` }).click();
  }
}
