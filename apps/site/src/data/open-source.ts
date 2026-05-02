import { getCollection } from "astro:content";

export interface Repository {
  url: string;
  name: string;
  description: string;
  language: { name: string; color: string };
  starsCount: number;
  forksCount: number;
}

const GITLAB_TOKEN =
  "glpat-hk2JZ8Exwjf-AMRYumJYimM6MQpvOjEKdTo0enJueg8.01.171c0ifhx";
export const GITHUB_TOKEN = "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";

export const repositories: Repository[] = (
  await getCollection("repositories")
).map((repository) => ({
  url: repository.data.html_url,
  name: repository.data.name,
  description: repository.data.description,
  language: {
    name: repository.data.language ?? "Git Commit",
    color: repository.data.language_url,
  },
  starsCount: repository.data.stargazers_count,
  forksCount: repository.data.forks_count,
}));
