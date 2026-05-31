export class Backpack {
  constructor(mark, color, volume, name, lidOpen) {
    this.mark = mark;
    this.color = color;
    this.volume = volume;
    this.name = name;
    this.lidOpen = lidOpen;
  }
  toggleLid() {
    this.lidOpen = !this.lidOpen;
  }
  describe() {
    return `This is a ${this.mark} backpack, color ${this.color}, volume ${this.volume}, name ${this.name}, lid open: ${this.lidOpen}`;
  }
}
