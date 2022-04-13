import { expect } from "chai";
import { TrafficLight } from "../src/TrafficLight";
import { converHexToDec } from "../src/converHexToDec";

describe('Hex to Dec Conversor ISO8583', () => {
  [
    { from: "0", to: "0" },
    { from: "1", to: "1" },
    { from: "11", to: "3" },
    { from: "111", to: "7" },
    { from: "1010", to: "A" },
    { from: "10100", to: "14" },
  ].forEach((testCase) => {

    it(`should convert ${testCase.from} to ${testCase.from}`, () => {
      expect(converHexToDec(testCase.from)).equal(testCase.to);
    });
  });

  // [ ] Recibe binario por constructor
  // [ ] Devuelve hex
  // [ ] 0 => 0x00
  // [ ] 1 => 0x01
});
