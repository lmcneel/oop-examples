export default class Employee {
  constructor(
    public id: number,
    public name: string,
    protected basePay: number
  ) {}

  // A generic calculation method
  calculatePay(): number {
    return this.basePay;
  }

  getInfo(): string {
    return `Employee ${this.id}: ${this.name}`;
  }
}
