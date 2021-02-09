import { RestaurantId } from '../restaurant-id/restaurant-id';
import { BaseEntity } from '../base/entity/entity';
import { LatLng } from '../latlng/latlng';
import { AppLocation } from '../app-location/app-location';
import { BudgetLevel } from '../budget-level/budget-level';

interface AdaptedRestaurant {
  id: RestaurantId;
  phoneNumber: string;
  name: string;
  aliasName: string;
  url: string;
  coordinates: LatLng;
  thumbnailUrl: string;
  location: AppLocation;
  budgetLevel: BudgetLevel;
  rating: number;
}

export class Restaurant extends BaseEntity<RestaurantId> {
  constructor(private item: AdaptedRestaurant) {
    super(item.id);
  }

  get phoneNumber(): string {
    return this.item.phoneNumber;
  }

  get name(): string {
    return this.item.name;
  }

  get url(): string {
    return this.item.url;
  }

  get coordinates(): LatLng {
    return this.item.coordinates;
  }

  get thumbnailUrl(): string {
    return this.item.thumbnailUrl;
  }

  get location(): AppLocation {
    return this.item.location;
  }

  get budgetLevel(): BudgetLevel {
    return this.item.budgetLevel;
  }

  get rating(): number {
    return this.item.rating;
  }

  get aliasName(): string {
    return this.item.aliasName;
  }
}
