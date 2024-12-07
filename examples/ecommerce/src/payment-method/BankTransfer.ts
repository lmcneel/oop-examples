import type { IPaymentMethod } from "../types/payment-method";

export class BankTransferPayment implements IPaymentMethod {
  constructor(private accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  private formatUSD(amount: number): string {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  processPayment(amount: number): void {
    console.log(`Bank transfer to account ${this.accountNumber} for ${this.formatUSD(amount)}`);
  }
}
