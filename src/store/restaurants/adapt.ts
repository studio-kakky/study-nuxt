import { BusinessResponse } from '../../shared/api/yelp/business/response';
import { Restaurant } from '../../shared/models/restaurant/restaurant';
import { RestaurantId } from '../../shared/models/restaurant-id/restaurant-id';
import { LatLng } from '../../shared/models/latlng/latlng';
import { AppLocation } from '../../shared/models/app-location/app-location';
import { BudgetLevel } from '../../shared/models/budget-level/budget-level';
import { Restaurants } from '../../shared/models/restaurant/restaurants';

const adaptOne = (res: BusinessResponse): Restaurant => {
  const budgetLevel = !!res.price
    ? BudgetLevel.fromNumber(res.price.length)
    : new BudgetLevel(0);

  return new Restaurant({
    id: new RestaurantId(res.id),
    phoneNumber: res.phone,
    name: res.name,
    url: res.url,
    coordinates: new LatLng(res.coordinates),
    thumbnailUrl: res.image_url,
    location: new AppLocation({
      city: res.location.city,
      country: res.location.country,
      address1: res.location.address1,
      address2: res.location.address2,
      address3: res.location.address3,
      state: res.location.state,
      zipCode: res.location.zip_code,
    }),
    budgetLevel,
    rating: res.rating,
  });
};

export const adapt = (res: BusinessResponse[]): Restaurants => {
  const list = res.map(adaptOne);
  return new Restaurants(list);
};
