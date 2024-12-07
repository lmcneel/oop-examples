# TypeScript Object Oriented Programming

- [Why](#why-use-oop-in-typescriptjavascript)
- [Resources](#resources)
  - [Examples](#examples)

The purpose of this repo is to provide high level code examples for the following OOP concepts.

- Inheritance
- Polymorphism
- Composition

## Why Use OOP in TypeScript/JavaScript?

- **Type Safety**: TypeScript ensures that properties and methods are used correctly, reducing runtime errors.
- **Readability and Maintainability**: OOP structures code into well-defined objects, making it easier for teams to understand and maintain.
- **Reusability**: Classes and interfaces encourage code reuse, reducing duplication.

As you learn and practice these concepts, always ask yourself:

- Can I simplify this structure?
- Is the relationship here truly an 'is-a' or more of a 'has-a'?
- Am I making my code more flexible and easier to test by using interfaces and polymorphism?

## Resources

- [Glossary](./glossary.md)
- [Checklist](./checklist.md)

### Examples

- [Animal](./examples/animal/)
  - Basic example of inheritance with an Animal and Dog class
- [Car](./examples/car/)
  - Basic example of composition
- [Employees](./examples/employees/)
- [ECommerce](./examples/ecommerce/)
- [Report Generator](./examples/report-generator/)

#### Usage

All examples are include a package.json and scripts to run and build the code.

```bash
cd ./examples/[example-name]
npm install
npm start
```

##### NPM Scripts

- `npm run build`: typescripts and builds the code in the dist folder
- `npm run dev`: uses tsx to run the typescript src code without error checking
- `npm start`: runs `npm run build` and then uses node to run the `dist/index.js` file
