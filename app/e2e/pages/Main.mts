import { Page } from "playwright";
import { Common } from "./Common.mts";

export const injectMainPage = async (
  { page }: { page: Page },
  use: (page: Main) => Promise<void>
) => await use(new Main(page));

export class Main extends Common {
  constructor(page: Page) {
    super(page);
  }
  async navigate(): Promise<void> {
    await this.page.goto("/");
  }
}
