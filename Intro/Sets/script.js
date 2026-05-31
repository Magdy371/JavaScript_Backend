const items = new Set();
items.add("Marcelia");
items.add("Marcelia");
items.add(30);
items.add(true);
console.log(items);

//Sets Operations
let length = items.size;
console.log(`Length of items set: ${length}`);

let result = items.has("Magdy");
console.log(`Does items have "Magdy"? ${result}`);

result = items.delete(true);
console.log(`Deleted item value is ${result}`);

length = items.size;
console.log(`Length of items set: ${length}`);
console.log("_____________________________________");
//Operations on sets
items.forEach((item) => {
  if (typeof item == "number") {
    console.log(`Number item: ${item}`);
  } else {
    console.log(`Non-number item: ${item}`);
  }
});
console.log("_____________________________________");
const newSet = new Set();
newSet.add("Spain");
newSet.add(50);
newSet.add(false);
console.log(newSet);
console.log("________________UnionSet for bot sets is____________________");
const unionSet = new Set([...items, ...newSet]);
console.log(unionSet);
//Accessing elements by index
// Sets do not support indexing, so accessing elements by index is not possible.
