const analyze = require("../functions/array");

test("Object array [1,2,3,4,5] should be analyzed without error", () => {
  const obj = analyze([3, 2, 1, 4, 5]);
  expect(obj.average).toBe(3);
  expect(obj.max).toBe(5);
  expect(obj.min).toBe(1);
  expect(obj.length).toBe(5);
});
