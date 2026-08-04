var findMissingElement = function(num) {
    // Sort numerically
    num.sort((a, b) => a - b);

    const mySet = new Set(num);
    const myArray = [...mySet];

    const firstNumber = myArray[0];
    const lastNumber = myArray[myArray.length - 1];

    let missingElements = [];

    for (let i = firstNumber; i <= lastNumber; i++) {
        if (!mySet.has(i)) {
            missingElements.push(i);
        }
    }

    console.log(missingElements);
};

const arr = [1,4,2,5];
findMissingElement(arr);
// Output: [1, 3, 8]
