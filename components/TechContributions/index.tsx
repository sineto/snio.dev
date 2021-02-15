import Link from 'next/link';
import Repositories from './Repositories';
import * as Styles from './styles';

const TechContributions = (): JSX.Element => {
  return (
    <Styles.TechContributions>
      <Styles.TechContributionsContent>
        <Repositories />
        <Link href='https://github.com/sineto' passHref>
          <Styles.MoreRepos target='_blank' rel='noreferrer'>
            SEE MORE...
          </Styles.MoreRepos>
        </Link>
      </Styles.TechContributionsContent>
    </Styles.TechContributions>
  );
};

export default TechContributions;
