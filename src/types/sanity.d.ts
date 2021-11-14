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

export type SanityPageSettings = {
  header: SanityHeaderPage;
  introduce: SanityIntroducePage;
  skills: SanitySkillPage[];
};
