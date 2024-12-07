import Employee from './Employee.js';

export default class Contractor extends Employee {
  constructor(
    id: number,
    name: string,
    basePay: number,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(id, name, basePay);
  }

  override calculatePay(): number {
    // Contractors might be paid based on hours worked
    return this.hourlyRate * this.hoursWorked;
  }

  override getInfo(): string {
    return `${super.getInfo()} (Contractor)`;
  }
}
