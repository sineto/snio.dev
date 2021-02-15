import Link from 'next/link';
import { iconLoader } from '../../../helpers';
import { Repository } from '../../../utils/types';
import * as Styles from './styles';

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps): JSX.Element => {
  return (
    <Styles.TechRepositoryCard>
      <Styles.RepositoryCardHeader>
        <Link href={repository.url}>
          <a target='_blank' rel='noreferrer'>
            {repository.name}
            <span className='iconLink'>{iconLoader('bi-link-alt')}</span>
          </a>
        </Link>
        <p>{repository.description}</p>
      </Styles.RepositoryCardHeader>
      <Styles.RepositoryCardSpecs>
        {repository.lang && (
          <li>
            <Styles.LangSpan lang={repository.lang}></Styles.LangSpan>
            {repository.lang}
          </li>
        )}
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
