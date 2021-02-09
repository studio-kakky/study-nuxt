import { RequestParams } from '../../request-params/request-params';

export abstract class BaseGetInputModel {
  getHeaders(): RequestParams {
    return {};
  }

  getQueries(): RequestParams {
    return {};
  }

  getUrlVariable(): RequestParams {
    return {};
  }
}
