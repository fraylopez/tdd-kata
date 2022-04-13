import { LinkedArray } from "./LinkedArray";

export class TrafficLight {
  private lights: LinkedArray;
  private status: string;
  constructor() {
    this.lights = new LinkedArray(["red", "green", "yellow"]);
    this.status = this.lights[0];
  }
  next() {
    this.status = this.lights.next();
    return this.render();
  }

  render() {
    return this.status;
  }
  emergency(): any {
    this.status = "yellow";
  }
}
