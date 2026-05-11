import {getCollection} from "astro:content";

export interface Repository {
  url: string;
  name: string;
  description: string;
  language: { name: string; color: string };
  starsCount: number;
  forksCount: number;
}

export const getRepositories =  async () => {
  return (await getCollection("repositories"))
    .map((repository) => ({
      url: repository?.data.html_url,
      name: repository?.data.name,
      description: repository?.data.description,
      language: {
        name: repository?.data.language ?? "Git Commit",
        color: repository?.data.language_url,
      },
      starsCount: repository?.data.stargazers_count,
      forksCount: repository?.data.forks_count,
    }));
}
