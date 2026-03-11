import backPack from "./backPack.js";
export class HikingBackpack extends backPack {
  constructor(
    marks,
    size,
    vol,
    contain_led,
    ledOpen,
    strapLengthL,
    strapLengthR,
    HidrationCapacity,
  ) {
    super(marks, size, vol, contain_led, ledOpen, strapLengthL, strapLengthR);
    this.HidrationCapacity = HidrationCapacity;
  }
  checkHidration() {
    if (this.HidrationCapacity > 0) {
      console.log("Hidration capacity is above 0");
    } else {
      console.log("Hidration capacity is 0 or below");
    }
  }
  //we can override methods from the parent class here
  toggleLed(ledStatus) {
    if (this.ledOpen) {
      console.log("LED is already on");
    } else {
      super.toggleLed(ledStatus);
    }
  }
}
export default HikingBackpack;
