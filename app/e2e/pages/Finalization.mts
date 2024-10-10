import { Page } from "playwright";
import { Common } from "./Common.mts";

export const injectFinalizationPage = async (
  { page }: { page: Page },
  use: (page: Finalization) => Promise<void>
) => await use(new Finalization(page));
//
////CLASS
export class Finalization extends Common {
  constructor(page: Page) {
    super(page);
  }
  async visit() {
    await this.page.goto("/finalization");
  }
  async enterFormValue(name: string, value: string) {
    const options = name === "Name" ? { exact: true } : undefined;
    const input = this.page.getByLabel(name, options);
    await input.click();
    await input.fill(value);
  }

  async buttonPayOnDeliveryClick() {
    await this.page.getByRole("button", { name: "Pay on delivery" }).click();
  }
  async buttonConfirmClick() {
    await this.page.getByRole("button", { name: "Confirm" }).click();
  }

  async buttonClick(name: string) {
    await this.page.getByRole("button", { name: name }).click();
  }
  // #getInput(name: string) {
  //   return this.page.getByLabel(name);
  // }
}
