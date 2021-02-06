import { NumberValue } from '../base/values/number-value';

type Level = 1 | 2 | 3 | 4;

const priceStringMap = new Map<Level, string>([
  [1, '$'],
  [2, '$$'],
  [3, '$$$'],
  [4, '$$$$$'],
]);

export class BudgetLevel extends NumberValue {
  constructor(private level: Level) {
    super(level);
  }

  toPriceString(): string {
    const priceString = priceStringMap.get(this.level);
    return !!priceString ? priceString : '';
  }
}
