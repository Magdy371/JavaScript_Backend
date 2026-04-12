//Shared Beavior
/*
What happened here?
user1 does not have sayHi directly.
JavaScript looks at user1’s prototype.
It finds sayHi in userMethods.
That is the prototype concept in its most direct form:
*/
const userMethod = {
  greet() {
    return `Hello ${this.name}`;
  },
};

const user1 = Object.create(userMethod);
user1.name = "Magdy";

const user2 = Object.create(userMethod);
user2.name = "Mohamed";

console.log("user1", user1.greet());
console.log("user2", user2.greet());

console.log("user1 ProtoType is", Object.getPrototypeOf(user1));
console.log("user2 ProtoType is", Object.getPrototypeOf(user2));

console.log("user1 hase propety name", Object.hasOwnProperty("name"));
console.log("user2 hase propety name", Object.hasOwnProperty("name"));
console.log("____________________________");
console.log("____________________________");

//Arrays uses prototypes too
const arr = [1, 2, 3];
console.log(arr.push(6));
console.log(arr.map((x) => x ** 2));
/*
Where do push and map come from?

Not from the array itself.

They come from Array.prototype.

That means every array shares the same methods.
*/
console.log(arr.__proto__ === Array.prototype);
/*
So internally, JavaScript does something like:

“Does this array have map?”
“No.”
“Check Array.prototype.”
“Found it.”
*/
console.log("____________________________");
console.log("____________________________");
const person = { name: "Magdy" };
console.log(person.toString());
console.log(person.hasOwnProperty("name"));
/*
toString and hasOwnProperty are not written inside person.
They come from Object.prototype.
person → Object.prototype → null
*/
console.log("____________________________");
console.log("____________________________");
