import { NumberValue } from '../base/values/number-value';

export class BudgetLevel extends NumberValue {
  constructor(private level: 1 | 2 | 3 | 4) {
    super(level);
  }
}
