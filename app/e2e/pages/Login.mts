import { Page } from "playwright";
import { Common } from "./Common.mts";

export const injectLoginPage = async (
  { page }: { page: Page },
  use: (page: Login) => Promise<void>
) => await use(new Login(page));
//
////CLASS
export class Login extends Common {
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
