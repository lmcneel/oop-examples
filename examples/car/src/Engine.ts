import type { IEngine } from "./types.d.ts";

export default class Engine implements IEngine {
  start(): void {
    console.log("Engine starting...");
  }
}
