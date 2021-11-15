import Link from 'next/link';
import { usePageContent } from '../../hooks';
import Repositories from './Repositories';
import * as Styles from './styles';

const TechContributions = (): JSX.Element => {
  const { socialProfile } = usePageContent();

  return (
    <Styles.TechContributions>
      <Styles.TechContributionsContent>
        <Repositories />
        {socialProfile && (
          <Link href={socialProfile.github} passHref>
            <Styles.MoreRepos target='_blank' rel='noreferrer'>
              SEE MORE...
            </Styles.MoreRepos>
          </Link>
        )}
      </Styles.TechContributionsContent>
    </Styles.TechContributions>
  );
};

export default TechContributions;
