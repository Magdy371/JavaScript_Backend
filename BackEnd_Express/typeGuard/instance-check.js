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

//     return obj instanceof classFunction;
// }

var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function')
        return false;
    return Object(obj) instanceof classFunction;
};

// Example runs
console.log(checkIfInstanceOf(new Date(), Date)); // true
class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true
