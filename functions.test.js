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

// user object
// toBe is for primitive types. Objects and arrays are reference types meaning they're saved in different memory areas
test("User should be Jasterix Obelix object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Jasterix",
    lastName: "Obelix"
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 600;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  // case sensitive:
  expect("team").not.toMatch("/I");
  // case insensitive:
  expect("team").not.toMatch("/I/i");
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then( data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
