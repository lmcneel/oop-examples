export interface IPaymentMethod {
  processPayment(amount: number): void;
}
