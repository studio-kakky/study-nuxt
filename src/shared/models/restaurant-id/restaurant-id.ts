import { StringValue } from '../base/values/string-value';

export class RestaurantId extends StringValue {
  constructor(protected value: string) {
    super(value);
  }
}
