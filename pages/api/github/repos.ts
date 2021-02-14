import { NextApiRequest, NextApiResponse } from 'next';

const repos = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    res.status(200).json({ title: 'test github' });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default repos;
