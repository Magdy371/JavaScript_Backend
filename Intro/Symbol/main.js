/**
 * Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, 
 * and which are hidden from any mechanisms other code will typically use to access the object. 
 * This is commonly used to add hidden properties to objects used by libraries, or to add "private" object properties to objects created by code in an application.
 * Symbols are also commonly used as keys for native JavaScript objects.
 * 
 * Symbols are created with the Symbol constructor.
 * 
 * Symbols are created with the Symbol constructor.
 * 
 * Symbols are created with the Symbol constructor.
 * 
 * Symbols are created with the Symbol constructor.
*/

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');
const symbol4 = Symbol('foo');
console.log(symbol1, symbol2, symbol3, symbol4);
console.log(`symbol3 === symbol4: ${symbol3 === symbol4}`);