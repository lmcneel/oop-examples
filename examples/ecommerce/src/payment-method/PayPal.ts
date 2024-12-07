import type { IPaymentMethod } from "../types/payment-method";

export class PayPalPayment implements IPaymentMethod {
  constructor(private email: string) {
    this.email = email;
  }

  private formatUSD(amount: number): string {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  processPayment(amount: number): void {
    console.log(`Processing payment payment for ${this.formatUSD(amount)} from ${this.email}`);
  }
}
