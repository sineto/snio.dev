import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import axios from 'axios';
import { getPageGithubSources } from './../../../src/services/sanity/index';
import { GithubRepository } from '../../../src/types/global';

const { publicRuntimeConfig } = getConfig();

const sortReposByStars = (repositories: GithubRepository[]): GithubRepository[] => {
  return repositories
    .sort((repoA, repoB) => {
      if (repoA.stars > repoB.stars) return 1;
      return -1;
    })
    .reverse();
};

const defineRepositories = (repositories: any[]): GithubRepository[] => {
  const repos: GithubRepository[] = repositories.map((repo: any) => {
    return {
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      lang: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count
    };
  });

  return repos;
};

const filterRepositories = async (sources: string[]): Promise<GithubRepository[]> => {
  const repositories: any[] = [];
  for await (const source of sources) {
    const { data } = await axios.get(source);
    repositories.push(...data);
  }

  return defineRepositories(repositories);
};

const getRepositories = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const sources = await getPageGithubSources();
  try {
    let repositories: GithubRepository[] = await filterRepositories(sources[0].links);
    repositories = sortReposByStars(repositories);

    res.status(200).send({ repositories });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getRepositories;
