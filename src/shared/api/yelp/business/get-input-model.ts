import { BaseGetInputModel } from '../../../models/base/api/get-input-model';
import { LatLng } from '../../../models/latlng/latlng';
import { BudgetLevel } from '../../../models/budget-level/budget-level';
import { getAuthorizationHeader } from '../lib/get-authorized-header';
import { RequestParams } from '../../../models/request-params/request-params';

export interface YelpBusinessGetApiParams {
  location?: string;
  coordinates?: LatLng;
  limit?: number;
  offset?: number;
  budgetLevel?: BudgetLevel;
}

export class YelpBusinessGetApiInputModel extends BaseGetInputModel {
  constructor(private params: YelpBusinessGetApiParams) {
    super();
  }

  getHeaders(): Record<string, string> {
    return getAuthorizationHeader();
  }

  getQueries(): RequestParams {
    const location = !!this.params.location
      ? { location: this.params.location }
      : {};

    const coordinates = !!this.params.coordinates
      ? this.params.coordinates.toParams()
      : {};

    const limit = !!this.params.limit ? { limit: this.params.limit } : {};
    const offset = !!this.params.offset ? { offset: this.params.offset } : {};
    const price = !!this.params.budgetLevel
      ? { price: this.params.budgetLevel.toPriceString() }
      : {};

    const params = {
      ...location,
      ...coordinates,
      ...offset,
      ...limit,
      ...price,
    } as RequestParams;

    if (!params.location && !params.coordinates) {
      return {
        ...params,
        location: 'Tokyo',
      };
    }

    return params;
  }
}
