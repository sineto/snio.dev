import axios, { AxiosPromise } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const users: string[] = ['sineto', 'sinetoami'];

const filterRepositories = async (users: string[]): Promise<AxiosPromise[]> => {
  let repositories: AxiosPromise[];
  for await (const user of users) {
    const { data } = await axios.get(`https://api.github.com/users/${user}/repos`);
    repositories = [...data];
  }

  return repositories;
};

const repos = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const repositories = await filterRepositories(users);
    res.status(200).json({ repositories });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default repos;
