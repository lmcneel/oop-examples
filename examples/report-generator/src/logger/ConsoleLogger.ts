import type { Logger } from "../types/logger";

export default class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}
