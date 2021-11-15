import { GithubRepository } from '../../../types/global';
import RepositoryCard from '../RepositoryCard';
import { usePageContent } from '../../../hooks';
import * as Styles from './styles';

const Repositories = (): JSX.Element => {
  const { githubRepositories } = usePageContent();

  return (
    <Styles.TechContentCards>
      <Styles.TechContentHeader>
        <h1>Tech Contributions</h1>
        <p>My public repositories on Github</p>
      </Styles.TechContentHeader>
      {(githubRepositories || [])
        .slice(0, 9)
        .map((repo: GithubRepository, index: number) => {
          return <RepositoryCard key={`${index}-${repo.name}`} repository={repo} />;
        })}
    </Styles.TechContentCards>
  );
};

export default Repositories;
