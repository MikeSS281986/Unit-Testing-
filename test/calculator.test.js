const calculator = require("../functions/calculator");

let calc = new calculator();

test("adding 2 + 3 should equal 5", () => {
  expect(calc.add(2, 3)).toBe(5);
});

test("subtracting 1 from 10 should equal 9", () => {
  expect(calc.subtract(10, 1)).toBe(9);
});

test("dividing 36 by 6 should equal 6", () => {
  expect(calc.divide(36, 6)).toBe(6);
});

test("mulitplying 9 by 9 should equal 81", () => {
  expect(calc.multiply(9, 9)).toBe(81);
});
