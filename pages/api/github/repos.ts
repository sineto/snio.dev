import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface Repository {
  name: string
  url: string
  description?: string
  lang: string
  stars: number
  forks: number
}

const users: string[] = ['sineto', 'sinetoami'];

const sortReposByStars = (repositories: Repository[]): Repository[] => {
  return repositories
    .sort((repoA, repoB) => {
      if (repoA.stars > repoB.stars) return 1;
      return -1;
    })
    .reverse();
};

const defineRepositories = (repositories: any[]): Repository[] => {
  const repos: Repository[] = repositories.map((repo: any) => {
    return {
      name: repo.name,
      url: repo.url,
      description: repo.description,
      lang: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count
    };
  });

  return repos;
};

const filterRepositories = async (users: string[]): Promise<Repository[]> => {
  const repositories: any[] = [];
  for await (const user of users) {
    const { data } = await axios.get(`https://api.github.com/users/${user}/repos`);
    repositories.push(...data);
  }

  return defineRepositories(repositories);
};

const repos = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    let repositories: Repository[] = await filterRepositories(users);
    repositories = sortReposByStars(repositories);

    res.status(200).json({ repositories });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default repos;
