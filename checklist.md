# Checklist for Applying OOP in Your Projects

- [ ] Identify Classes and Objects:
  - Determine what entities in your problem domain can be modeled as classes.
  - Clearly define their responsibilities.
- [ ] Encapsulate Data and Behavior:
  - Keep related state and logic within the same class.
  - Use access modifiers (public, private, protected) to control access.
- [ ] Use Inheritance Wisely:
  - Inherit when there’s a clear “is-a” relationship.
  - Don’t force classes into an inheritance hierarchy if it doesn’t fit naturally.
- [ ] Leverage Polymorphism:
  - Design interfaces or abstract classes that different implementations can follow.
  - Ensure that code depending on a general contract can work with various subclasses.
- [ ] Favor Composition Over Inheritance (When Appropriate):
  - If you can assemble functionality from multiple smaller objects rather than inheriting, do so to keep your designs flexible.
- [ ] Type Annotations and Interfaces:
  - Use TypeScript’s type annotations and interfaces to clearly specify what a class or function expects and returns.
  - Ensure your code is checked at compile time for errors.
- [ ] Iterate and Refine:
  - Refine your class hierarchies and interfaces as you discover more about your domain.
  - Regularly review the relationships between classes and break up overly large, complex classes.