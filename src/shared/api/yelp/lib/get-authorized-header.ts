import { yelp } from '../../../../../.yelp-api-key';

export const getAuthorizationHeader = (): { Authorization: string } => {
  return { Authorization: `Bearer ${yelp}` };
};
