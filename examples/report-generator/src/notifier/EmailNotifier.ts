import type { Notifier } from "../types/notifier";

export default class EmailNotifier implements Notifier {
  constructor(private smtpServer: string) {}

  notify(recipient: string, message: string): void {
    // TODO: Implement email sending
    console.log(`Sending email to ${recipient} via ${this.smtpServer}: ${message}`);
  }
}
