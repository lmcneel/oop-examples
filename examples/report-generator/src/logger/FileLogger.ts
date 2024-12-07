import type { Logger } from "../types/logger";

export default class FileLogger implements Logger {
  constructor(private filePath: string) {}

  log(message: string): void {
    // TODO: Implement file writing
    console.log(`Writing to file ${this.filePath}: ${message}`);
  }
}
