import { expect } from "chai";
import { TrafficLight } from "../src/TrafficLight";
import { converHexToDec } from "../src/converHexToDec";

describe('TrafficLight', () => {

  it('should exist class ', () => {
    new TrafficLight();
  });

  it('should start red', () => {
    expect(new TrafficLight().render()).equal("red");
  });

  it('should change', () => {
    const trafficLight = new TrafficLight();
    const current = trafficLight.render();
    expect(new TrafficLight().next()).not.equal(current);
  });

  it('should change from red to green', () => {
    expect(new TrafficLight().next()).equal("green");
  });

  it('should change from green to yellow', () => {
    const trafficLight = new TrafficLight();
    expect(trafficLight.next()).equal("green");
    expect(trafficLight.next()).equal("yellow");
  });

  it('should loop yellow to red', () => {
    const trafficLight = new TrafficLight();
    expect(trafficLight.next()).equal("green");
    expect(trafficLight.next()).equal("yellow");
    expect(trafficLight.next()).equal("red");
  });

  it('should change to yellow on emergency', () => {
    const trafficLight = new TrafficLight();
    trafficLight.emergency();
    expect(trafficLight.render()).equal("yellow");
  });
});

  // [X] Empieza en Rojo
  // [X] Puede cambiar
  // [X] De Rojo a Verde
  // [X] De Verde a Ambar
  // [X] De Ambar a Rojo
  // [X] Modo emergencia en Ambar