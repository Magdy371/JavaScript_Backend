import HikingBackpack from "./classes/HikingBackpack.mjs";

const myBackpack = new HikingBackpack("Nikie", 20, 30, true, true, 20, 20, 50);
console.log(myBackpack);
console.log("---------------------");
myBackpack.checkHidration();
myBackpack.toggleLed(true);
