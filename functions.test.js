const functions = require("./functions");

test("Adds 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be truthy", () => {
  expect(functions.checkValue(2)).toBeTruthy();
});
