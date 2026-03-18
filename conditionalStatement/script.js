import { Backpack } from "./classes/backPack.js";
const myBackpack = new Backpack("Adidas", "red", "Martile", "Lorganie", true);

console.log(myBackpack.describe());

class myEveryDayBackpack extends Backpack {
  constructor(mark, color, volume, name, lidOpen, content) {
    super(mark, color, volume, name, lidOpen);
    this.content = content;
  }
  describe() {
    return `${super.describe()}, content: ${this.content.pencil}, ${this.content.paper}, ${this.content.pen}`;
  }
}

let myBackContent = {
  pencil: "2 pencil",
  paper: "3 sketches",
  pen: "2 pins",
};

const myEveryDayPag = new myEveryDayBackpack(
  "Adidas",
  "red",
  "Martile",
  "Lorganie",
  false,
  myBackContent,
);
console.log(myEveryDayPag.describe());

if (myEveryDayPag.content.pen) {
  console.log("You have a pen in your backpack!");
} else if (myEveryDayPag.content.pencil) {
  console.log("You have a pencil in your backpack!");
} else {
  console.log("You have nothing in your backpack.");
}

// Switch statement example using backpack content
switch (true) {
  case myEveryDayPag.lidOpen === true:
    console.log("your led is open");
    break;
  case myEveryDayPag.lidOpen === false:
    console.log("Your led is closed");
    break;
  case myEveryDayPag.lidOpen === undefined:
    console.log("You do not have a lid in your backpack!");
    break;
  default:
    console.log(`change your ${myEveryDayPag.mark} Backpack`);
}
