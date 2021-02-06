import { BaseEntities } from '../base/entity/entities';
import { Restaurant } from './restaurant';

export class Restaurants extends BaseEntities<Restaurant> {
  constructor(protected list: Restaurant[]) {
    super(list);
  }

  toArray(): Restaurant[] {
    return this.list;
  }
}
