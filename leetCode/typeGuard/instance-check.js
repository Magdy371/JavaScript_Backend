// function checkIfInstanceOf(obj, classFunction) {
//     if (obj == null || typeof classFunction !== "function") {
//         return false;
//     }

//     // Handle primitives that have wrapper classes
//     if (
//         (typeof obj === "number" && classFunction === Number) ||
//         (typeof obj === "string" && classFunction === String) ||
//         (typeof obj === "boolean" && classFunction === Boolean) ||
//         (typeof obj === "symbol" && classFunction === Symbol) ||
//         (typeof obj === "bigint" && classFunction === BigInt)
//     ) {
//         return true;
//     }
// Special case: all primitives should be considered instances of Object
// if (
//     (typeof obj === "number" ||
//      typeof obj === "string" ||
//      typeof obj === "boolean" ||
//      typeof obj === "symbol" ||
//      typeof obj === "bigint") &&
//     classFunction === Object
// ) {
//     return true;
// }

//     return obj instanceof classFunction;
// }

/**
 *
 * Why it works

    Object(obj) boxes primitives into their wrapper objects:

        Object(5) → new Number(5)

        Object("hi") → new String("hi")

        Object(true) → new Boolean(true)

        Object(5n) → new BigInt(5n) (conceptually, though BigInt doesn’t have a constructor, it still gets boxed) 
*/
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function')
        return false;
    return Object(obj) instanceof classFunction;
};

// Example runs
console.log(checkIfInstanceOf(new Date(), Date)); // true
class Animal { }
class Dog extends Animal { }
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true
