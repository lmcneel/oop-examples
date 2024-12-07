import { IOrderItem } from "../types/order-item";

export default class OrderItem implements IOrderItem {
  constructor(public productName: string, public price: number, public quantity: number) {}
}
