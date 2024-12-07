import Log from './Log.js';
import FullTimeEmployee from './FullTimeEmployee.js';
import Contractor from './Contractor.js';

function formatMoney(amount: number): string {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

Log.title('Employee Management System');
const alice = new FullTimeEmployee(1, "Alice", 3000);
const bob = new Contractor(2, "Bob", 0, 50, 80);

Log.title('Employee: Alice');
Log.info(alice.getInfo());            // "Employee 1: Alice"
Log.info(`Pay: ${formatMoney(alice.calculatePay())}`);     // 3000
Log.info(`Benefits: ${alice.getBenefits().join(", ")}`);      // "Health Insurance, 401k"

Log.title('Employee: Bob');
Log.info(bob.getInfo());            // "Employee 2: Bob (Contractor)"
Log.info(`Pay: ${formatMoney(bob.calculatePay())}`);       // 4000
