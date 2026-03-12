let item = "flashLight";
const collections = [item, 5, "COW", true, [45, 55, 44, 32]];
console.log(collections);
console.log(`length: ${collections.length}`);
//To ADD a new item to the array
collections[collections.length] = "Marcelia";
//OR SIMPLY USE push() method
collections.push("Spain");
console.log(collections);
console.log(`length: ${collections.length}`);

//Array Methods
//pop() method removes the last element from an array and returns that element.
collections.pop();
console.log(collections);
console.log(`length: ${collections.length}`);

//shift() method removes the first element from an array and returns that element.
collections.shift();
console.log(collections);
console.log(`length: ${collections.length}`);

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
collections.unshift("Marcelia", "Magdy");
console.log(collections);
console.log(`length: ${collections.length}`);

//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(collections.indexOf("Marcelia"));

//find() method returns the first element in the array that satisfies the provided testing function.
console.log(collections.find((item) => item === "Marcelia"));

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(collections.filter((item) => typeof item === "string"));

//sort() method sorts the elements of an array in place and returns the sorted array.
console.log(collections.sort());
