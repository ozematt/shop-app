import { Page } from "playwright";
import { Common } from "./Common.mts";

export const injectSearchPage = async (
  { page }: { page: Page },
  use: (page: SearchPage) => Promise<void>
) => await use(new SearchPage(page));

export class SearchPage extends Common {
  constructor(page: Page) {
    super(page);
  }

  async searchEngine(value: string) {
    const searchInput = this.page.getByPlaceholder("Search…").nth(1);
    await searchInput.click();
    await searchInput.fill(value);
  }
}
