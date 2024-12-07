# ECommerce

ECommerce has two examples

## PaymentMethods are an example of polymorphism

Consider an e-commerce platform that needs to process payments. We can define a PaymentMethod interface and implement multiple classes like CreditCardPayment, PayPalPayment, and BankTransferPayment. Polymorphism allows our checkout process to accept any payment method that adheres to the PaymentMethod interface.

Your system can support multiple payment methods without altering the checkout process. If a new payment option arises (e.g., Apple Pay), just implement the PaymentMethod interface. The rest of the code doesn’t need to change.

## Order is an example of Composition

In an e-commerce scenario, an Order can be composed of various items and a PaymentMethod. An order “has” items and “has” a payment method. The order itself doesn’t inherit from these objects; it merely uses them. This shows composition: building a more complex object out of simpler parts.

An order “has” a payment method and “has” items. It doesn’t need to be a subclass of PaymentMethod or OrderItem. Instead, it composes these objects to fulfill its responsibilities—just like a real order in a business, which is composed of details and a chosen payment route.

Order doesn't care if the user pays with a credit card, Paypal, or a bank transfer - it only cares that the user can checkout.
Order also doesn't care what the items are. Just that the order has items to check out.
