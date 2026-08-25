/**
 * Strings in JavaScript
 * =====================
 *
 * 0. A string is a primitive data type used to represent text.
 *    It can be written with single quotes, double quotes, or backticks.
 */
const singleQuoted = 'Hello';
const doubleQuoted = "JavaScript";
const templateString = `Strings are useful`;

console.log(singleQuoted, doubleQuoted, templateString);

/**
 * 1. Strings are immutable.
 *    String methods return a new string; they do not change the original.
 */
const original = 'hello';
const uppercase = original.toUpperCase();

console.log(original);  // "hello"
console.log(uppercase); // "HELLO"

// Individual characters cannot be changed directly:
// original[0] = 'H'; // Does not modify the string.

/**
 * 2. A string behaves like a list (sequence) of characters.
 *    Characters are accessed by zero-based index and the length is counted
 *    using the `length` property. Strings are iterable with a loop.
 */
const word = 'Code';

console.log(word[0]);      // "C"
console.log(word.charAt(1)); // "o"
console.log(word.length);  // 4

for (const character of word) {
	console.log(character);
}

/**
 * 3. Using `typeof`.
 *    The `typeof` operator identifies strings with the value "string".
 */
console.log(typeof word);       // "string"
console.log(typeof 'text');     // "string"
console.log(typeof 42);         // "number"

// Common string operations
const message = '  Hello, world!  ';

console.log(message.trim());
console.log(message.toLowerCase());
console.log(message.includes('world'));
console.log(message.startsWith('  Hello'));
console.log(message.endsWith('  '));
console.log(message.slice(2, 7));
console.log(message.split(' '));

// Template literals support interpolation and multiple lines.
const name = 'Ada';
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Ada!"

//Sub string
/**
 * To locate the position of a substring inside of a string, you can use the indexOf() method.
 *  The indexOf() method in JavaScript allows you to search for a substring within a string.
*/
let sentence =  "JavaScript is awesome!";
let positionOfSubstring = sentence.indexOf("awesome!");
let position = sentence.indexOf("fantastic");
console.log(`The postition of provided subString "awesome!" is: ${positionOfSubstring}`);
console.log(`there is a subString called "fantastic? :" ${position === -1? false : true}`);

//ASCII
/**
 * short for American Standard Code for Information Interchange,
 *  is a character encoding standard used in computers to represent text. 
 * It assigns a numeric value to each character, which is universally recognized by machines.
*/
const myName = "Magdy Mohammed !";
const lastCharacterIndex = myName.length -1;
console.log(`ASCII code of character a is ${myName.charCodeAt(1)}`);
console.log(`ASCII code of character ! is ${myName.charCodeAt(lastCharacterIndex)}`);

/**
 * fromCharCode() method allows you to do the opposite: convert a UTF-16 code unit 
 * (which matches ASCII for basic characters) into its corresponding character.
*/
const letterRetrived = String.fromCharCode(98);
console.log(letterRetrived);

//include method is case sensetive
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");
let result2 = phrase.includes("Awesome");
console.log(`the phrase contains awesome keyword: ${result}`);
console.log(`the phrase contains Awesome keyword: ${result2}`);

//se the includes() method to check for a substring 
// starting at a specific index in the string by providing a second parameter:
let text = "Hello, JavaScript world!";
let result3 = text.includes("JavaScript", 7);

console.log(result3);

//Slice method slice(startIndex, endIndex) || slice(startIndex) will be sliced to the last index
let originalPhrase = "Hello, world!";
let sliced = originalPhrase.slice(0,6);
console.log(`Sliced word is: ${sliced}`);
let sliced2 = originalPhrase.slice(6);
console.log(`Sliced word is: ${sliced2}`);
/**
 * You can also use negative numbers as indexes.
 *  When you use a negative number, it counts backward from the end of the string:
*/
let message1 = "JavaScript is fun!";
let lastWord = message1.slice(-4);
console.log(lastWord);  // fun!

let sentence2 = "Learning JavaScript is fun!";
let extracted = sentence2.slice(9, -5);

console.log(extracted);