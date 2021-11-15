import { GithubRepository } from './global';

export type SanityHeaderPage = {
  badge: string;
  title: string;
  subTitle: string;
};

export type SanityIntroducePage = {
  greet: string;
  body: string;
  keywords: string[];
};

export type SanitySkillPage = {
  name: string;
  icon: string;
  description: string;
};

export type SanitySocialProfilePage = {
  name: string;
  linkedin: string;
  github: string;
  email: string;
  phoneNumber: string;
  telegram: string;
};

export type SanityPageSettings = {
  header: SanityHeaderPage;
  introduce: SanityIntroducePage;
  skills: SanitySkillPage[];
  githubRepositories: GithubRepository[];
  socialProfile: SanitySocialProfilePage;
};
