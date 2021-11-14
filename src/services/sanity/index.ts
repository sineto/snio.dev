import { groq } from 'next-sanity';
import { getClient } from '../../../lib/sanity';

export const getPageHeader = async (): Promise<any> => {
  const query = groq`
    *[_type == "header" && !(_id in path("drafts.**"))]{
      headerBadge,
      headerTitle,
      headerSubTitle
    }
  `;

  return getClient().fetch(query);
};
