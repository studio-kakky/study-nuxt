import axios from 'axios';

import { YelpBusinessGetApiInputModel } from './get-input-model';
import { YelpGetBusinessSearchApiResponse } from './response';

const endpointUrl = 'http://localhost:3000/api/v3/businesses/search';

export const yelpBusinessSearchApi = {
  get(
    model: YelpBusinessGetApiInputModel
  ): Promise<YelpGetBusinessSearchApiResponse> {
    const headers = model.getHeaders();
    return axios
      .get(endpointUrl, { params: model.getQueries(), headers })
      .then((v) => v.data);
  },
};
