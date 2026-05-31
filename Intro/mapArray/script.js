const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let eveNumbers = numbers.filter((number) => {
  return number % 2 == 0;
});
let oddNumbers = numbers.filter((number) => {
  return number % 2 != 0;
});
for (let i = 0; i < eveNumbers.length; i++) {
  console.log(eveNumbers[i]);
}
console.log("_________________________________");
for (let i = 0; i < oddNumbers.length; i++) {
  console.log(oddNumbers[i]);
}
const numbersV = [1, 2, 3, 4, 5, 6, 7, 8];
const doubled = numbersV.map((number) => {
  return number * 2;
});
for (let i = 0; i < doubled.length; i++) {
  console.log(doubled[i]);
}
