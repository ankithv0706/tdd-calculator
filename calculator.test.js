const Calculator = require("./calculator");

const calculator = new Calculator();

describe("TDD Calculator", () => {
  test("should contain add function", () => {
    expect(typeof calculator.add === "function").toBe(true);
  });
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
});
