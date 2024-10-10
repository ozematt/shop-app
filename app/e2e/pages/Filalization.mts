import { Page } from "playwright";
import { Common } from "./Common.mts";

export const injectFinalizationPage = async (
  { page }: { page: Page },
  use: (page: FinalizationPage) => Promise<void>
) => await use(new FinalizationPage(page));

export class FinalizationPage extends Common {
  constructor(page: Page) {
    super(page);
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
