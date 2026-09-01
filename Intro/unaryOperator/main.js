const strNumber = '25';
const incrementStrNumber = +strNumber;
const decrementStrNumber = -strNumber;
console.log(typeof strNumber);
// +,- operator will apply type Coersion
console.log(typeof incrementStrNumber);
console.log(typeof decrementStrNumber);

/**
 * The logical NOT operator, represented by an exclamation mark (!), is another unary operator.
 *  It flips the boolean value of its operand.
 *  So, if the operand is true, it becomes false, and if it's false, it becomes true. 
*/

const isOnline =  'true';
const isOffline = !'true';
console.log(typeof isOnline);
console.log(typeof isOffline);

/**
 * The bitwise NOT operator is a less commonly used unary operator.
 *  Represented by a tilde, ~, it inverts the binary representation of a number.
 *  Computers store numbers in binary format (1s and 0s). The ~ operator flips every bit,
 *  meaning it changes all 1s to 0s and all 0s to 1s. You will learn more about binary and bits in a future lesson.
*/

const num = 5; // The binary for 5 is 00000101
console.log(~num);

//The void keyword is a unary operator that evaluates an expression and returns undefined.
const result = void(5+5);
console.log(result); //undefined
console.log(typeof result); //undefined

//bitWiseOperators

/**
 * Bitwise AND (&): Returns 1 if both bits are 1, otherwise 0
 * Example: 5 & 3
 * 5 = 101 (binary)
 * 3 = 011 (binary)
 * Result = 001 = 1
 */
console.log("Bitwise AND:");
console.log(5 & 3); // Output: 1

/**
 * Bitwise OR (|): Returns 1 if at least one bit is 1
 * Example: 5 | 3
 * 5 = 101 (binary)
 * 3 = 011 (binary)
 * Result = 111 = 7
 */
console.log("Bitwise OR:");
console.log(5 | 3); // Output: 7

/**
 * Bitwise XOR (^): Returns 1 if bits are different
 * Example: 5 ^ 3
 * 5 = 101 (binary)
 * 3 = 011 (binary)
 * Result = 110 = 6
 */
console.log("Bitwise XOR:");
console.log(5 ^ 3); // Output: 6

/**
 * Bitwise NOT (~): Inverts all bits (already covered above)
 * Example: ~5
 * 5 = 00000101 (binary)
 * Result = 11111010 = -6
 */
console.log("Bitwise NOT:");
console.log(~5); // Output: -6

/**
 * Left Shift (<<): Shifts bits left, filling with zeros on the right
 * Example: 5 << 1
 * 5 = 101 (binary)
 * Result = 1010 = 10 (multiply by 2)
 */
console.log("Left Shift:");
console.log(5 << 1); // Output: 10
console.log(5 << 2); // Output: 20

/**
 * Right Shift (>>): Shifts bits right, preserving the sign bit
 * Example: 5 >> 1
 * 5 = 101 (binary)
 * Result = 10 = 2 (divide by 2)
 */
console.log("Right Shift:");
console.log(5 >> 1); // Output: 2
console.log(-5 >> 1); // Output: -3

/**
 * Unsigned Right Shift (>>>): Shifts bits right, filling with zeros
 * Example: -5 >>> 1
 * Differs from >> for negative numbers
 */
console.log("Unsigned Right Shift:");
console.log(5 >>> 1); // Output: 2
console.log(-5 >>> 1); // Output: 2147483645
