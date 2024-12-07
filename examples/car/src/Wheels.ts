import type { IWheels } from "./types.d.ts";

export default class Wheels implements IWheels {
  roll(): void {
    console.log("Wheels are rolling...");
  }
}
