import Link from 'next/link';
import { Header } from '../components';
import { iconLoader } from '../helpers';
import * as Styles from './styles';
import theme from '../styles/theme';

const Home = () => {
  return (
    <Styles.Container>
      <Header />
      <Styles.IntroduceContent>
        <Styles.IntroduceSkills>
          <Styles.SkillCard>
            <Styles.SkillCardBody>
              <Styles.SkillCardTitle>
                Back-end
                {iconLoader('ai-fill-api', 22, theme.green)}
              </Styles.SkillCardTitle>
              <Styles.SkillCardDesc>
                I can develop APIs with REST/GraphQL architecture
              </Styles.SkillCardDesc>
            </Styles.SkillCardBody>
            <Link href='#'>
              <a>
                <Styles.SkillCardLinkCustomers>
                  Clients
                </Styles.SkillCardLinkCustomers>
              </a>
            </Link>
          </Styles.SkillCard>
          <Styles.SkillCard>
            <Styles.SkillCardBody>
              <Styles.SkillCardTitle>
                Front-end
                {iconLoader('fa-code', 22, theme.green)}
              </Styles.SkillCardTitle>
              <Styles.SkillCardDesc>
                Front-end develop with React and Nextjs
              </Styles.SkillCardDesc>
            </Styles.SkillCardBody>
            <Link href='#'>
              <a>
                <Styles.SkillCardLinkCustomers>
                  Clients
                </Styles.SkillCardLinkCustomers>
              </a>
            </Link>
          </Styles.SkillCard>
          <Styles.SkillCard>
            <Styles.SkillCardBody>
              <Styles.SkillCardTitle>
                Deployment
                {iconLoader('ai-deploy-unit', 22, theme.green)}
              </Styles.SkillCardTitle>
              <Styles.SkillCardDesc>
                Infrastructure with Google Cloud Platform and Vercel
              </Styles.SkillCardDesc>
            </Styles.SkillCardBody>
            <Link href='#'>
              <a>
                <Styles.SkillCardLinkCustomers>
                  Clients
                </Styles.SkillCardLinkCustomers>
              </a>
            </Link>
          </Styles.SkillCard>
        </Styles.IntroduceSkills>
        <Styles.IntroduceAbout>
          <Styles.AboutTag>
            Introduce
          </Styles.AboutTag>
          <Styles.AboutContent>
            <Styles.AboutTitle>
              Hi! My name is Sinésio Neto
            </Styles.AboutTitle>
            <Styles.AboutBody>
              A freelance developer with main focus on building web solutions{' '}
              with a JavaScript and Nodejs stack. Beyond HTML and CSS, I'm familiar{' '}
              with the Express micro-framework on back-end and the React library on{' '}
              front-end, including Nextjs and Gatsby frameworks. I'm also learning{' '}
              how to develop GraphQL APIs and how this amazing architecture works.
            </Styles.AboutBody>
            <Styles.AboutBody>
              I'm able to delivery developed web applications with a great{' '}
              infrastructure of deployment, mainly hosted on Google Cloud Platform{' '}
              and Vercel Platform.
            </Styles.AboutBody>
          </Styles.AboutContent>
        </Styles.IntroduceAbout>
      </Styles.IntroduceContent>

    </Styles.Container>
  );
};

export default Home;