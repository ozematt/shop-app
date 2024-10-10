import { Page } from "playwright";
import { Common } from "./Common.mts";
import { expect } from "@playwright/test";

export const injectMainPage = async (
  { page }: { page: Page },
  use: (page: Main) => Promise<void>
) => await use(new Main(page));

export class Main extends Common {
  constructor(page: Page) {
    super(page);
  }
  async visit(): Promise<void> {
    await this.page.goto("/");
  }
  async verifyURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }
}
