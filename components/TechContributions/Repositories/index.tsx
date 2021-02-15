import RepositoryCard from '../RepositoryCard';
import * as Styles from './styles';

export interface RepositorySpecs {
  name: string
  url: string
  description: string
  lang: string
  stars: string
  forks: string
}

interface RepositoriesProps {
  repositories: RepositorySpecs[]
}

const Repositories = ({ repositories }: RepositoriesProps): JSX.Element => {
  return (
    <Styles.TechContentCards>
      <Styles.TechContentHeader>
        <h1>Tech Contributions</h1>
        <p>My public repositories on Github</p>
      </Styles.TechContentHeader>
      {repositories.map((repo) => {
        return <RepositoryCard repository={repo} />;
      })}
    </Styles.TechContentCards>
  );
};

export default Repositories;
