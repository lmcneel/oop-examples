import Log from './Log.js';
import Animal from './Animal.js';
import Dog from './Dog.js';

// The following code demonstrates that TypeScript supports encapsulation.
Log.title("Encapsulation:");
const animal = new Animal('Generic Animal');
animal.speak();

// The following code demonstrates that TypeScript supports inheritance.
Log.title("Inheritance:");
const dog = new Dog('Fido');
dog.speak();


// The following code demonstrates that TypeScript supports polymorphism.
Log.title("Polymorphism:");
const animals: Animal[] = [animal, dog];
animals.forEach(animal => animal.speak());
