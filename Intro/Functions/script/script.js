//Function declaration
function doMath(a, b) {
  let c = a + b;
  return c;
}
//Function expression
const doMath2 = function (a, b) {
  let c = a + b;
  return c;
};

//Arrow function
const doMath3 = (a, b) => {
  let c = a + b;
  return c;
};
//hoisted function
console.log("Hoisted function call before declaration", doMultiple(3, 4));
function doMultiple(a, b) {
  let c = a * b;
  return c;
}

console.log("Function declaration", doMath(2, 3));
console.log("Function expression", doMath2(2, 3));
console.log("Arrow function", doMath3(2, 3));
console.log("Hoisted function", doMultiple(3, 4));

//Invoke function Immediately (IIFE)
(function () {
  let a = 2;
  let b = 3;
  console.log("IIFE", doMath(a, b));
})();
