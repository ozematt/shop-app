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
    await this.#getButton("Pay on delivery").click();
  }
  async buttonPaymentCardClick() {
    await this.#getButton("Payment card").click();
  }
  async buttonConfirmClick() {
    await this.#getButton("Confirm").click();
  }
  async buttonAddCardClick() {
    await this.#getButton("Add Card").click();
  }

  async buttonClick(name: string) {
    await this.#getButton(name).click();
  }
  #getButton(name: string) {
    return this.page.getByRole("button", { name: name });
  }
}
