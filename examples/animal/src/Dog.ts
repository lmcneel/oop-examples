import Animal from './Animal.js';

export default class Dog extends Animal {
  override speak(): void {
    console.log(`${this.name} barks.`);
  }
}
