const Calculator = require("./calculator");

const calculator = new Calculator();

describe("TDD Calculator", () => {
  test("should contain add function", () => {
    expect(typeof calculator.add === "function").toBe(true);
  });
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
  test("should return same number if one single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("99")).toBe(99);
  });
  test("should return sum for two numbers separated by comma", () => {
    expect(calculator.add("1,2")).toBe(3);
  });
  test("should return sum for multiple numbers", () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
    expect(calculator.add("100,24,35,42,54")).toBe(255);
  });
});
