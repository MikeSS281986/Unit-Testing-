const reversestring = require("../functions/reversestring");

test("takes string and outputs a reversed version of it", () => {
  expect(reversestring("hello")).toBe("olleh");
});
