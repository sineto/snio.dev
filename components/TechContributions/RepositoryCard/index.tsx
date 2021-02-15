import Link from 'next/link';
import { RepositorySpecs } from '../Repositories';
import { iconLoader } from '../../../helpers';
import * as Styles from './styles';

interface RepositoryCardProps {
  repository: RepositorySpecs
}

const RepositoryCard = ({ repository }: RepositoryCardProps): JSX.Element => {
  return (
    <Styles.TechRepositoryCard>
      <Styles.RepositoryCardHeader>
        <Link href={repository.url}>
          <h2>
            {repository.name}
            <span className='iconLink'>{iconLoader('bi-link-alt')}</span>
          </h2>
        </Link>
        <p>{repository.description}</p>
      </Styles.RepositoryCardHeader>
      <Styles.RepositoryCardSpecs>
        <li>
          <span></span>
          {repository.lang}
        </li>
        <li>
          {iconLoader('fa-star')}
          {repository.stars}
        </li>
        <li>
          {iconLoader('io-branch')}
          {repository.forks}
        </li>
      </Styles.RepositoryCardSpecs>
    </Styles.TechRepositoryCard>
  );
};

export default RepositoryCard;
