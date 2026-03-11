import backPack from "./classes/backPack.mjs";
const myPack = new backPack (
    "Nike",
    "Medium",
    20,
    true,
    false,
    10,
    10
);
myPack.toggleLed(true);
myPack.newStrapLength(30,30);
console.log("The backpack object:", myPack);
console.log("------------------------------");
console.log("The backpack marks:", myPack.marks);
console.log("------------------------------");
console.log("The backpack size:", myPack.size);
console.log("------------------------------");
console.log("The backpack volume:", myPack.vol);
console.log("------------------------------");
console.log("The backpack contain LED light:", myPack.contain_led);
console.log("------------------------------");
console.log("The backpack LED light is open:", myPack.ledOpen);
console.log("------------------------------");
console.log("The backpack strap length left:", myPack.strapLengthL);
console.log("The backpack strap length right:", myPack.strapLengthR);
