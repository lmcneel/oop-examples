import type { Notifier } from "../types/notifier";

export default class SMSNotifier implements Notifier {
  constructor(private phoneNumber: string) {}

  notify(recipient: string, message: string): void {
    // TODO: Implement SMS sending
    console.log(`Sending SMS to ${recipient} at ${this.phoneNumber}: ${message}`);
  }
}
