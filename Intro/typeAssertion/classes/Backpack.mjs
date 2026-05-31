function assertType(value, type, paramName) {
  if (typeof value !== type) {
    throw new TypeError(
      `Expected ${type} for ${paramName}, but got ${typeof value}`,
    );
  }
}

export class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
  ) {
    assertType(name, "string", "name");
    assertType(volume, "number", "volume");
    assertType(color, "string", "color");
    assertType(pocketNum, "number", "pocketNum");
    assertType(strapLengthL, "number", "strapLengthL");
    assertType(strapLengthR, "number", "strapLengthR");
    assertType(lidOpen, "boolean", "lidOpen");

    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLengthL = strapLengthL;
    this.strapLengthR = strapLengthR;
    this.lidOpen = lidOpen;
  }
  activateLid(status) {
    assertType(status, "boolean", "status");
    this.lidOpen = status;
  }
  resizestrapLength(num1, num2) {
    assertType(num1, "number", "num1");
    assertType(num2, "number", "num2");
    this.strapLengthL = num1;
    this.strapLengthR = num2;
  }
}
export default Backpack;
