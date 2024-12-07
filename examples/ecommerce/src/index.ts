import Log from './Log.js';
import { BankTransferPayment, CreditCardPayment, PayPalPayment } from './payment-method/index.js';
import Order from './order/Order.js';
import OrderItem from './order/OrderItem.js';
import type { IPaymentMethod } from './types/payment-method.d.ts';

Log.title('E-commerce example');

function checkout(amount: number, paymentMethod: IPaymentMethod) {
  paymentMethod.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment('1234 5678 9012 3456', 'John Doe');
const bankTransferPayment = new BankTransferPayment('1234567890');
const payPalPayment = new PayPalPayment('some-email@example.com');

Log.title('Checkout with credit card payment');
checkout(100, creditCardPayment);
Log.title('Checkout with bank transfer payment');
checkout(200, bankTransferPayment);
Log.title('Checkout with PayPal payment');
checkout(300, payPalPayment);


Log.title('Order example');
const order = new Order(creditCardPayment);
order.addItem(new OrderItem('Product 1', 100, 1));
order.addItem(new OrderItem('Product 2', 200, 2));
Log.info(order.getTotal().toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
order.placeOrder();
