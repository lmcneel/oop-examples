# Employees

In a real-world business, you might have a general Employee and different types of employees like FullTimeEmployee and Contractor. Both share fundamental characteristics (like name, ID, and payment details), but differ in how they are paid or what their working hours look like.

This is an example of inheritance.

`FullTimeEmployee` and `Contractor` extend `Employee`

An organization’s HR system can have a class hierarchy representing different types of employees. This avoids duplicating code for things like id, name, or calculatePay(), while still allowing specialization in subclasses.
