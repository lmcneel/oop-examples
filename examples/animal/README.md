# Animal

Animal is a basic example of inheritance and polymorphism.

Inheritance allows you to create a new class that will inherit the properties and methods from a parent class.
The child class can then extend or override them.

Polymorphism is the idea that different classes in the same heirarchy can implment the same method in different ways.
It allows use to write code that works on a more general level without caring about the specific class type.

- `Animal` is a class with a `name` property and a `speak()` method
- Using `public` in the constructor automatically creates and initializes the `name` property

- `Dog` extends `Animal`, so it automatically gets `name` and the ability to call `speak()`
- We can override `speak` in Dog to make it `bark`
- Animal constructor is called when `Dog` is initialized because `Dog` does not provide a constructor method

- An array of animals is created that is a mixture of Animals and Dogs. Each of these animals can speak.
