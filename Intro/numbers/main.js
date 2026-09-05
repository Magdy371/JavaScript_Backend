/**
 * JavaScript's Number type includes various kinds of numeric values, 
 * ranging from simple integers and floating-point numbers to special cases like Infinity and NaN, or "Not a Number".
*/
{
    const wholeNumber = 50;
    const decimalNumber = 4.5;
    const negativeNumber = -7;
    const infiniteNumber = 1 / 0;

    console.log(typeof wholeNumber);
    console.log(typeof decimalNumber);
    console.log(typeof negativeNumber);

    console.log(`result of 1/0: ${infiniteNumber}`);
    console.log(typeof infiniteNumber);

    const notANumber = 'hello world' / 2;
    console.log(notANumber); // NaN
    console.log(typeof notANumber); // number
}

// Different Arithmetic Operators in JavaScript
{
    const num1 = 10;
    const num2 = 5;
    const num3 = 15;
    const num4 = 13;

    const result1 = num1 + num2;
    const result2 = num2 - num1;
    const result3 = num3 / num2;
    const result4 = num1 * num2;
    const result5 = num3 % num4;
    const exponent = num2 ** 2;

    console.log(result1); // 15
    console.log(result2); // -5
    console.log(result3); // 3
    console.log(result4); // 50
    console.log(result5); // 2
    console.log(exponent); // 25
}

{
    const result = 5 + '10';

    console.log(result); // 510
    console.log(typeof result); // string
    const result2 = '10' + 5;

    console.log(result2); // 105
    console.log(typeof result2); // string

    const subtractionResult2 = '10' - 5;
    console.log(subtractionResult2); // 5
    console.log(typeof subtractionResult2); // number

    const multiplicationResult2 = '10' * 2;
    console.log(multiplicationResult2); // 20
    console.log(typeof multiplicationResult2); // number

    const divisionResult2 = '20' / 2;
    console.log(divisionResult2); // 10
    console.log(typeof divisionResult2); // number

    const subtractionResult = 'abc' - 5;
    console.log(subtractionResult); // NaN
    console.log(typeof subtractionResult); // number

    const multiplicationResult = 'abc' * 2;
    console.log(multiplicationResult); // NaN
    console.log(typeof multiplicationResult); // number

    const divisionResult = 'abc' / 2;
    console.log(divisionResult); // NaN
    console.log(typeof divisionResult); // number

}

// Operator Precedence and Increment/Decrement Operators
{
    // JavaScript evaluates expressions according to operator precedence.
    // Multiplication and division happen before addition and subtraction.
    const result1 = 10 + 5 * 2;
    const result2 = (10 + 5) * 2;
    const result3 = 10 + 5 * 2 - 3;

    console.log(result1); // 20
    console.log(result2); // 30
    console.log(result3); // 17

    // Increment & decrement operators
    let counter = 5;

    // Postfix increment: use current value, then increase it
    console.log(counter++); // 5
    console.log(counter); // 6

    // Prefix increment: increase first, then use new value
    console.log(++counter); // 7
    console.log(counter); // 7

    // Postfix decrement: use current value, then decrease it
    console.log(counter--); // 7
    console.log(counter); // 6

    // Prefix decrement: decrease first, then use new value
    console.log(--counter); // 5
    console.log(counter); // 5
}

// Number theory and special numeric values
{
    /**
     * parseFloat() and parseInt() are two essential methods in JavaScript for converting strings to numbers. 
     * These methods are particularly useful when dealing with user input or processing data
     *  that comes in string format but needs to be treated as numerical values.
    */
    console.log(parseFloat("3.14"));     // 3.14
    console.log(parseFloat("3.14 abc")); // 3.14
    console.log(parseFloat("3.14.5"));   // 3.14
    console.log(parseFloat("abc 3.14")); // NaN

    console.log(parseInt("42"));       // 42
    console.log(parseInt("42px"));     // 42
    console.log(parseInt("3.14"));     // 3
    console.log(parseInt("abc123"));   // NaN

    //They handle plus and minus signs at the beginning of the string:
    console.log(parseFloat("+3.14"));  // 3.14
    console.log(parseInt("-42"));      // -42
}