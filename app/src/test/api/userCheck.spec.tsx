import { expect } from "vitest";
import { describe } from "vitest";
import loginTokenTest from "../../_mocks_/fixtures/loginTokenTest.json";
import userCheck from "../../api/queries/authorization";
//
////TESTS
describe("userCheck function", () => {
  it("should return token on login", async () => {
    const userData = { username: "mor_2314", password: "83r5^_" };
    expect(await userCheck(userData)).toEqual(loginTokenTest);
  });
});
