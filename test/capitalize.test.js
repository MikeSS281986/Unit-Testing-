const capitalize = require("../functions/capitalize");

test("should capitalize first letter in word", () => {
  expect(capitalize("mike")).toBe("Mike");
});
