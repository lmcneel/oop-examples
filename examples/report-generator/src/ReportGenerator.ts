import type { Notifier } from "./types/notifier";
import type { Logger } from "./types/logger";

export default class ReportGenerator {
  constructor(private notifier: Notifier, private logger: Logger) {}

  generate(data: string, recipient: string): void {
    const report = `Report for ${recipient}: ${data}`;
    this.logger.log(`Generating report: ${report}`);
    this.notifier.notify(recipient, `Report generated: ${report}`);
    this.logger.log(`Report generated and sent to ${recipient}`);
  }
}
