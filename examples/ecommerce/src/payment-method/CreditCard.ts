import type { IPaymentMethod } from "../types/payment-method";

export class CreditCardPayment implements IPaymentMethod {
  constructor(private cardNumber: string, private cardHolder: string) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
  }

  private formatUSD(amount: number): string {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  processPayment(amount: number): void {
    console.log(`Processing credit card payment for ${this.formatUSD(amount)} with card number ${this.cardNumber} and card holder ${this.cardHolder}`);
  }
}
