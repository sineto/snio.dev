import Link from 'next/link';
import Repositories, { RepositorySpecs } from './Repositories';
import * as Styles from './styles';

const repos: RepositorySpecs[] = [
  {
    name: 'starwars-starships-travel-compare',
    url: 'https://github.com/sineto',
    description:
      'Example of Nodejs app with Express.js and Embedded JavaScript Templates (EJS)',
    lang: 'TypeScript',
    stars: '123.4k',
    forks: '123,4'
  },
  {
    name: 'starwars-starships-travel-compare',
    url: 'https://github.com/sineto',
    description:
      'Example of Nodejs app with Express.js and Embedded JavaScript Templates (EJS)',
    lang: 'TypeScript',
    stars: '123.4k',
    forks: '123,4'
  },
  {
    name: 'starwars-starships-travel-compare',
    url: 'https://github.com/sineto',
    description:
      'Example of Nodejs app with Express.js and Embedded JavaScript Templates (EJS)',
    lang: 'TypeScript',
    stars: '123.4k',
    forks: '123,4'
  },
  {
    name: 'starwars-starships-travel-compare',
    url: 'https://github.com/sineto',
    description:
      'Example of Nodejs app with Express.js and Embedded JavaScript Templates (EJS)',
    lang: 'TypeScript',
    stars: '123.4k',
    forks: '123,4'
  },
  {
    name: 'starwars-starships-travel-compare',
    url: 'https://github.com/sineto',
    description:
      'Example of Nodejs app with Express.js and Embedded JavaScript Templates (EJS)',
    lang: 'TypeScript',
    stars: '123.4k',
    forks: '123,4'
  },
  {
    name: 'starwars-starships-travel-compare',
    url: 'https://github.com/sineto',
    description:
      'Example of Nodejs app with Express.js and Embedded JavaScript Templates (EJS)',
    lang: 'TypeScript',
    stars: '123.4k',
    forks: '123,4'
  },
  {
    name: 'starwars-starships-travel-compare',
    url: 'https://github.com/sineto',
    description:
      'Example of Nodejs app with Express.js and Embedded JavaScript Templates (EJS)',
    lang: 'TypeScript',
    stars: '123.4k',
    forks: '123,4'
  }
];

const TechContributions = (): JSX.Element => {
  return (
    <Styles.TechContributions>
      <Styles.TechContributionsContent>
        <Repositories repositories={repos} />
        <Link href='https://github.com/sineto'>
          <Styles.MoreRepos>SEE MORE...</Styles.MoreRepos>
        </Link>
      </Styles.TechContributionsContent>
    </Styles.TechContributions>
  );
};

export default TechContributions;
