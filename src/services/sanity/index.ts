import { groq } from 'next-sanity';
import { getClient } from '../../../lib/sanity';

export const getPageHeader = async (): Promise<any> => {
  const query = groq`
    *[_type == "header" && !(_id in path("drafts.**"))]{
      badge,
      title,
      subTitle
    }
  `;

  return getClient().fetch(query);
};

export const getPageIntroduce = async (): Promise<any> => {
  const query = groq`
    *[_type == "introduce" && !(_id in path("drafts.**"))]{
      greet,
      body,
      keywords
    }
  `;

  return getClient().fetch(query);
};

export const getPageSkills = async (): Promise<any> => {
  const query = groq`
    *[_type == "skill" && !(_id in path("draft.**"))]{
      name,
      icon,
      description
    }
  `;
  return getClient().fetch(query);
};
