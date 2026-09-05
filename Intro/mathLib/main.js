/**
 * The Math.random() method generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 *  This means the possible output can be 0, but it will never actually reach 1. 
*/
const randomNum = Math.random();
console.log(randomNum);

/**
 * Math.min() and Math.max() 
 * both take a set of numbers and return the minimum and maximum value, respectively. 
*/
let arr = [1, 5, 3, 9];
const smallest = Math.min(...arr);
console.log(smallest); // 1

const largest = Math.max(...arr);
console.log(largest); // 9

/**
 * If you wanted to round numbers up or down to the nearest whole integer,
 * you could use the Math.ceil() and Math.floor() methods. 
 * Math.ceil() rounds a number up to the nearest integer,
 * Math.floor() rounds a number down to the nearest integer.
 * Math.round() is the hybrid of Math.ceil() and Math.floor(). It rounds a number to its nearest integer, taking the decimal point into account
*/
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.7)); // 4

console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
//Generating a random number between 20 and 1 would look like this:
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);

/**
 *  Math.trunc() method. Math.trunc() removes the decimal part of a number, returning only the integer portion, 
*/
console.log(Math.trunc(4.7)); // 4

/**
 * If you need to get the square root or cube root of a number, 
 * you can use the Math.sqrt() and Math.cbrt() methods, respectively
*/
console.log(Math.sqrt(81)); // 9 // square root
console.log(Math.cbrt(27)); // 3 // cube root

// Math.abs() method returns the absolute value of a number, which is the number without its sign.
console.log(Math.abs(-5)); // 5 // absolute value

//Math.pow() takes two numbers and raise the first to the power of the second. 
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64
//Learning block
{
    const botName = "MathBot";
    const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

    console.log(greeting);

    console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

    const randomNum = Math.random();
    console.log(randomNum);

    console.log("Now, generate a random number between two values.");

    const min = 1;
    const max = 100;

    const randomNum2 = Math.random() * (max - min) + min;
    console.log(randomNum2);

    console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

    const numRoundedDown = Math.floor(6.7);
    console.log(numRoundedDown);

    console.log("Now, generate a random integer between two values.");

    const randomInt = Math.floor(Math.random() * (max - min) + min);
    console.log(randomInt);

    console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

    const numRoundedUp = Math.ceil(3.2);
    console.log(numRoundedUp);

    console.log(
        "The Math.round() method rounds the value to the nearest whole integer."
    );

    const numRounded = Math.round(2.7);
    console.log(numRounded);
    const numRounded2 = Math.round(11.2);
    console.log(numRounded2);

    console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

    const maxNum = Math.max(3, 125, 55, 24);
    console.log(maxNum);
    const minNum = Math.min(6, 90, 14, 90, 2);
    console.log(minNum);

    console.log("It was fun learning about the different Math methods with you!");
}
//Build a Fortune Teller
{
    const fortune1 = "Your cat will look very cuddly today.";
    const fortune2 = "The weather will be nice tomorrow.";
    const fortune3 = "Be cautious of your new neighbors.";
    const fortune4 = "You will find a new hobby soon.";
    const fortune5 = "It would be wise to avoid the color red today.";

    const min = 1;
    const max = 5;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let selectedFortune = "";

    if (randomNumber === 1) {
        selectedFortune = fortune1;
    } else if (randomNumber === 2) {
        selectedFortune = fortune2;
    } else if (randomNumber === 3) {
        selectedFortune = fortune3;
    } else if (randomNumber === 4) {
        selectedFortune = fortune4;
    } else if (randomNumber === 5) {
        selectedFortune = fortune5;
    }

    console.log(selectedFortune);
}