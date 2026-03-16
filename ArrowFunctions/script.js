// ========================================================
// THIS KEYWORD: Arrow Function vs Function Expression
// ========================================================

// ---------------- FUNCTION EXPRESSION -------------------
// In a regular function expression, `this` is DYNAMIC.
// It depends on HOW the function is called (the call site).
const person = {
  name: "Alice",

  // Regular function expression: `this` refers to the object
  // that CALLS the method (i.e., `person`)
  greet: function () {
    console.log("Hello, my name is " + this.name);
    // `this` here = person object ✅
  },

  greetDelayed: function () {
    setTimeout(function () {
      // ⚠️ Regular function inside setTimeout:
      // `this` is NO longer `person`.
      // In non-strict mode: `this` = global object (window/global)
      // In strict mode:     `this` = undefined
      console.log("Delayed Hello, my name is " + this.name);
      // `this.name` will be undefined ❌
    }, 1000);
  },
};

person.greet(); // "Hello, my name is Alice" ✅
person.greetDelayed(); // "Delayed Hello, my name is undefined" ❌

// ------------------- ARROW FUNCTION ----------------------
// Arrow functions do NOT have their own `this`.
// They INHERIT `this` from their surrounding (lexical) scope.
// This means `this` is determined by WHERE the function is defined,
// not how it is called.

const personArrow = {
  name: "Bob",

  greetDelayed: function () {
    // The surrounding scope here is the `greetDelayed` method,
    // where `this` = personArrow object.
    setTimeout(() => {
      // ✅ Arrow function inherits `this` from `greetDelayed`,
      // so `this` still refers to `personArrow`.
      console.log("Delayed Hello, my name is " + this.name);
      // `this.name` = "Bob" ✅
    }, 1000);
  },
};

personArrow.greetDelayed(); // "Delayed Hello, my name is Bob" ✅

// ------------------- KEY DIFFERENCE SUMMARY ----------------------
// | Feature              | Function Expression       | Arrow Function          |
// |----------------------|---------------------------|-------------------------|
// | Own `this`           | ✅ Yes (dynamic)          | ❌ No (lexical)         |
// | `this` determined by | How the function is called| Where it is defined     |
// | Use as method        | ✅ Works well             | ⚠️ Avoid (wrong `this`) |
// | Use in callbacks     | ⚠️ May lose `this`        | ✅ Works well           |

// ⚠️ CAUTION: Arrow function as an object method
const personBroken = {
  name: "Charlie",

  // Arrow function as a method: `this` is NOT `personBroken`.
  // It inherits `this` from the outer (global) scope instead.
  greet: () => {
    console.log("Hello, my name is " + this.name);
    // `this` here = global object (not personBroken) ❌
    // `this.name` = undefined ❌
  },
};

personBroken.greet(); // "Hello, my name is undefined" ❌
