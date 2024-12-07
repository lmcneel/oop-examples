import type { IEngine, IWheels } from "./types.d.ts";

// Car is not directly dependent on Engine or Wheels. It is dependent on the interfaces of Engine and Wheels.
// This is an example of the Dependency Inversion Principle.
// When car is instantianted, it is passed an Engine and Wheels object. (This is called Dependency Injection.)
// This allows the Car class to be more flexible and easier to test.
// It also allows a car to be installed with a V8 engine or a V6 engine, or with 4 wheels or 6 wheels.
// As long as the Engine and Wheels classes implement the Engine and Wheels interfaces, the Car class will work with them.
export default class Car {
  constructor(private engine: IEngine, private wheels: IWheels) {}

  drive(): void {
    this.engine.start();
    this.wheels.roll();
    console.log("Car is now driving.");
  }
}
