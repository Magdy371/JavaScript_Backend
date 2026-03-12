// Variable Declaration Methods
var oldVar = "var keyword (function scoped)";
let blockScopedVar = "let keyword (block scoped)";
const constantVar = "const keyword (block scoped, immutable)";

// Primitive Data Types
const numberType = 42;
const floatType = 3.14;
const stringType = "Hello, JavaScript!";
const booleanType = true;
const undefinedType = undefined;
const nullType = null;
const symbolType = Symbol("unique symbol");
const bigIntType = 123456789012345678901234567890n;

// Object Data Types
const objectType = { name: "John", age: 30 };
const arrayType = [1, 2, 3, 4, 5];
const functionType = function() { return "I'm a function"; };
const dateType = new Date();
const regexType = /pattern/g;

// Print all variables
console.log("=== Variable Declaration Methods ===");
console.log("var:", oldVar);
console.log("let:", blockScopedVar);
console.log("const:", constantVar);

console.log("\n=== Primitive Data Types ===");
console.log("Number:", numberType, typeof numberType);
console.log("Float:", floatType, typeof floatType);
console.log("String:", stringType, typeof stringType);
console.log("Boolean:", booleanType, typeof booleanType);
console.log("Undefined:", undefinedType, typeof undefinedType);
console.log("Null:", nullType, typeof nullType);
console.log("Symbol:", symbolType, typeof symbolType);
console.log("BigInt:", bigIntType, typeof bigIntType);

console.log("\n=== Object Data Types ===");
console.log("Object:", objectType, typeof objectType);
console.log("Array:", arrayType, typeof arrayType);
console.log("Function:", functionType, typeof functionType);
console.log("Date:", dateType, typeof dateType);
console.log("Regex:", regexType, typeof regexType);