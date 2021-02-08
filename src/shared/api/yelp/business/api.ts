import axios from 'axios';

import { YelpBusinessGetApiInputModel } from './get-input-model';
import { YelpGetBusinessSearchApiResponse } from './response';

const endpointUrl = 'https://api.yelp.com/v3/businesses/search';

export const yelpBusinessSearchApi = {
  get(
    model: YelpBusinessGetApiInputModel
  ): Promise<YelpGetBusinessSearchApiResponse> {
    return axios.get(endpointUrl, { params: model.getQueries() });
  },
};
