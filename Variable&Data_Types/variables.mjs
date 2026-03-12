/*
var is globally scoped, meaning it is accessible throughout the entire program. 
When you declare a variable using var inside a block (like an if statement),
 it does not create a new scope for that variable. 
 Instead, it overwrites the existing variable with the same name in the global scope.
*/
var x =1;
if(x == 1){
    var x = 2;
    console.log(x, "inside the block");
}
console.log(x, "outside the block");

/*
let and const are block-scoped, meaning they are only accessible within the block they are defined in. 
When you declare a variable using let or const inside a block, it creates a new scope for that variable.
This means that the variable declared with let or const inside the block will not affect the variable with the same name outside the block.
*/
let y = 1;
if(y == 1){
    let y = 2;
    console.log(y, "inside the block");
}
console.log(y, "outside the block");

const z = 1;
if(z == 1){
    const z = 2;
    console.log(z, "inside the block");
}
console.log(z, "outside the block");

