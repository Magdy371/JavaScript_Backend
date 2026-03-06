import backPack from "./classes/backPack";
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