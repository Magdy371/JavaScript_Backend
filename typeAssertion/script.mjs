import { Backpack } from "./classes/Backpack.mjs";
/**
 * we can use the typeof operator to identify the data type of any value,
 *  and then test to see if the data type matches what is expected.
 */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a + b;
}

console.log(add(2, 3));
//console.log(add("2", 3));

/**
 * make it DRY by creating a generic assert function that throws an error when data does not meet a specified type.
 */
function genericAssertion(value, type) {
  if (typeof value !== type) {
    throw new TypeError(`Expected ${type}, but got ${typeof value}`);
  }
}
function addWithAssertion(a, b) {
  genericAssertion(a, "number");
  genericAssertion(b, "number");
  return a + b;
}

console.log(addWithAssertion(78, 452));
//console.log(addWithAssertion("2", 3));

const myBackpack = new Backpack("My Backpack", 30, "red", 2, 10, 10, false);
console.log(myBackpack);
myBackpack.activateLid(true);
console.log(myBackpack.lidOpen);
myBackpack.resizestrapLength(20, 20);
console.log(`new StrapLenghtR ${myBackpack.strapLengthR}`);
console.log(`new StrapLenghtL ${myBackpack.strapLengthL}`);
