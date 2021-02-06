import { BaseObject } from '../base/object/object';

export interface AdaptedRestaurantCategory {
  alias: string;
  title: string;
}

export class RestaurantCategory extends BaseObject {
  constructor(private item: AdaptedRestaurantCategory) {
    super();
  }

  get title(): string {
    return this.item.title;
  }
}
