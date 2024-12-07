import Employee from "./Employee.js";

export default class FullTimeEmployee extends Employee {
  private benefits: string[] = ["Health Insurance", "401k"];

  override calculatePay(): number {
    // Full-time employees have a fixed base pay
    return this.basePay;
  }

  getBenefits(): string[] {
    return this.benefits;
  }
}