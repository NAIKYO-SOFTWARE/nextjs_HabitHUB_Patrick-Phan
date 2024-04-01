const example = require("./unitTestFunctions");

test("Yes you are gay", () => {
  expect(example.areYouGay()).toBe(true);
});

test("1 + 1 is 2", () => {
  expect(example.sum2Nums(1, 1)).toBe(2);
});
