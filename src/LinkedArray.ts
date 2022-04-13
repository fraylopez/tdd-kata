
export class LinkedArray extends Array {

  private index: number;
  constructor(private readonly array: Array<any>, startIndex = 0) {
    super();
    this.index = startIndex;
    array.forEach(v => this.push(v));
  }

  next() {
    if (this.index === this.array.length - 1) {
      this.index = 0;
    }
    else {
      this.index = this.index + 1;
    }
    return this[this.index];
  }
}
