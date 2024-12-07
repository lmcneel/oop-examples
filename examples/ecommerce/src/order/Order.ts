import { IPaymentMethod } from "../types/payment-method";
import { IOrderItem } from "../types/order-item";

export default class Order {
  private items: IOrderItem[] = [];

  constructor(private paymentMethod: IPaymentMethod) {}

  addItem(item: IOrderItem): void {
    this.items.push(item);
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  placeOrder(): void {
    const total = this.getTotal();
    this.paymentMethod.processPayment(total);
    console.log("Order placed successfully!");
  }
}
