const cipher = require("../functions/cipher");

test("The test HELLO WORLD with a key of 1 should return IFMMP XPSME", () => {
  expect(cipher("HELLO WORLD", 1)).toBe("IFMMP XPSME");
});
