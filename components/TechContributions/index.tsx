import Link from 'next/link';
import { iconLoader } from '../../helpers';
import * as Styles from './styles';

const TechContributions = (): JSX.Element => {
  return (
    <Styles.TechContributions>
      <Styles.TechContributionsContent>
        <Styles.TechContentRow>
          <Styles.TechContentColumn>
            <Styles.TechContentHeader>
              <h1>Tech Contributions</h1>
              <p>My public repositories on Github</p>
            </Styles.TechContentHeader>
            <Styles.TechRepositoryCard>
              <Styles.RepositoryCardHeader>
                <Link href='https://github.com/sineto'>
                  <h2>
                    starwars-starships-travel-compare
                    <span className='iconLink'>
                      {iconLoader('bi-link-alt')}
                    </span>
                  </h2>
                </Link>
                <p>
                  Example of Nodejs app with Express.js and Embedded JavaScript
                  Templates (EJS)
                </p>
              </Styles.RepositoryCardHeader>
              <Styles.RepositoryCardSpecs>
                <li>
                  <span></span>TypeScript
                </li>
                <li>{iconLoader('fa-star')}123.4k</li>
                <li>{iconLoader('io-branch')}1,234</li>
              </Styles.RepositoryCardSpecs>
            </Styles.TechRepositoryCard>
            <Styles.TechRepositoryCard>
              <Styles.RepositoryCardHeader>
                <Link href='https://github.com/sineto'>
                  <h2>
                    starwars-starships-travel-compare
                    <span className='iconLink'>
                      {iconLoader('bi-link-alt')}
                    </span>
                  </h2>
                </Link>
                <p>
                  Example of Nodejs app with Express.js and Embedded JavaScript
                  Templates (EJS)
                </p>
              </Styles.RepositoryCardHeader>
              <Styles.RepositoryCardSpecs>
                <li>
                  <span></span>TypeScript
                </li>
                <li>{iconLoader('fa-star')}123.4k</li>
                <li>{iconLoader('io-branch')}1,234</li>
              </Styles.RepositoryCardSpecs>
            </Styles.TechRepositoryCard>
            <Styles.TechRepositoryCard>
              <Styles.RepositoryCardHeader>
                <Link href='https://github.com/sineto'>
                  <h2>
                    starwars-starships-travel-compare
                    <span className='iconLink'>
                      {iconLoader('bi-link-alt')}
                    </span>
                  </h2>
                </Link>
                <p>
                  Example of Nodejs app with Express.js and Embedded JavaScript
                  Templates (EJS)
                </p>
              </Styles.RepositoryCardHeader>
              <Styles.RepositoryCardSpecs>
                <li>
                  <span></span>
                  TypeScript
                </li>
                <li>
                  {iconLoader('fa-star')}
                  123.4k
                </li>
                <li>
                  {iconLoader('io-branch')}
                  1,234
                </li>
              </Styles.RepositoryCardSpecs>
            </Styles.TechRepositoryCard>
          </Styles.TechContentColumn>
          <Styles.TechContentColumn>
            <Styles.TechRepositoryCard>
              <Styles.RepositoryCardHeader>
                <Link href='https://github.com/sineto'>
                  <h2>
                    starwars-starships-travel-compare
                    <span className='iconLink'>
                      {iconLoader('bi-link-alt')}
                    </span>
                  </h2>
                </Link>
                <p>
                  Example of Nodejs app with Express.js and Embedded JavaScript
                  Templates (EJS)
                </p>
              </Styles.RepositoryCardHeader>
              <Styles.RepositoryCardSpecs>
                <li>
                  <span></span>
                  TypeScript
                </li>
                <li>
                  {iconLoader('fa-star')}
                  123.4k
                </li>
                <li>
                  {iconLoader('io-branch')}
                  1,234
                </li>
              </Styles.RepositoryCardSpecs>
            </Styles.TechRepositoryCard>
            <Styles.TechRepositoryCard>
              <Styles.RepositoryCardHeader>
                <Link href='https://github.com/sineto'>
                  <h2>
                    starwars-starships-travel-compare
                    <span className='iconLink'>
                      {iconLoader('bi-link-alt')}
                    </span>
                  </h2>
                </Link>
                <p>
                  Example of Nodejs app with Express.js and Embedded JavaScript
                  Templates (EJS)
                </p>
              </Styles.RepositoryCardHeader>
              <Styles.RepositoryCardSpecs>
                <li>
                  <span></span>
                  TypeScript
                </li>
                <li>
                  {iconLoader('fa-star')}
                  123.4k
                </li>
                <li>
                  {iconLoader('io-branch')}
                  1,234
                </li>
              </Styles.RepositoryCardSpecs>
            </Styles.TechRepositoryCard>
            <Styles.TechRepositoryCard>
              <Styles.RepositoryCardHeader>
                <Link href='https://github.com/sineto'>
                  <h2>
                    starwars-starships-travel-compare
                    <span className='iconLink'>
                      {iconLoader('bi-link-alt')}
                    </span>
                  </h2>
                </Link>
                <p>
                  Example of Nodejs app with Express.js and Embedded JavaScript
                  Templates (EJS)
                </p>
              </Styles.RepositoryCardHeader>
              <Styles.RepositoryCardSpecs>
                <li>
                  <span></span>
                  TypeScript
                </li>
                <li>
                  {iconLoader('fa-star')}
                  123.4k
                </li>
                <li>
                  {iconLoader('io-branch')}
                  1,234
                </li>
              </Styles.RepositoryCardSpecs>
            </Styles.TechRepositoryCard>
            <Styles.TechRepositoryCard>
              <Styles.RepositoryCardHeader>
                <Link href='https://github.com/sineto'>
                  <h2>
                    starwars-starships-travel-compare
                    <span className='iconLink'>
                      {iconLoader('bi-link-alt')}
                    </span>
                  </h2>
                </Link>
                <p>
                  Example of Nodejs app with Express.js and Embedded JavaScript
                  Templates (EJS)
                </p>
              </Styles.RepositoryCardHeader>
              <Styles.RepositoryCardSpecs>
                <li>
                  <span></span>
                  TypeScript
                </li>
                <li>
                  {iconLoader('fa-star')}
                  123.4k
                </li>
                <li>
                  {iconLoader('io-branch')}
                  1,234
                </li>
              </Styles.RepositoryCardSpecs>
            </Styles.TechRepositoryCard>
          </Styles.TechContentColumn>
        </Styles.TechContentRow>
        <Link href='https://github.com/sineto'>
          <Styles.MoreRepos>SEE MORE...</Styles.MoreRepos>
        </Link>
      </Styles.TechContributionsContent>
    </Styles.TechContributions>
  );
};

export default TechContributions;