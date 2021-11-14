import { getClient } from '../../../lib/sanity';

export const getHeader = async (query: string): Promise<any> => {
  return getClient().fetch(query);
};
