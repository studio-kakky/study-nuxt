import { NumberValue } from '../base/values/number-value';

type Level = 0 | 1 | 2 | 3 | 4;

const priceStringMap = new Map<Level, string>([
  [0, ''],
  [1, '$'],
  [2, '$$'],
  [3, '$$$'],
  [4, '$$$$$'],
]);

export class BudgetLevel extends NumberValue {
  static fromNumber(level: number) {
    if (![0, 1, 2, 3, 4].includes(level)) {
      return new BudgetLevel(0);
    }

    return new BudgetLevel(level as Level);
  }

  constructor(private level: Level) {
    super(level);
  }

  toPriceString(): string {
    const priceString = priceStringMap.get(this.level);
    return !!priceString ? priceString : '';
  }
}
