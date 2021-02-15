import { useContext } from 'react';
import { Repository } from '../../../utils/types';
import RepositoryCard from '../RepositoryCard';
import { DataContext } from '../../../context/DataContext';
import * as Styles from './styles';

const Repositories = (): JSX.Element => {
  const { githubData } = useContext(DataContext);

  return (
    <Styles.TechContentCards>
      <Styles.TechContentHeader>
        <h1>Tech Contributions</h1>
        <p>My public repositories on Github</p>
      </Styles.TechContentHeader>
      {(githubData || []).slice(0, 9).map((repo: Repository, index: number) => {
        return <RepositoryCard key={`${index}-${repo.name}`} repository={repo} />;
      })}
    </Styles.TechContentCards>
  );
};

export default Repositories;
