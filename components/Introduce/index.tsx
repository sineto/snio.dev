import { iconLoader } from '../../helpers';
import { SkillCardProps } from './Skills/SkillCard';
import About from './About';
import Skills from './Skills';
import * as Styles from './styles';
import theme from '../../styles/theme';

const skills: SkillCardProps[] = [
  { title: 'Back-end', icon: iconLoader('ai-fill-api', 22, theme.green), description: 'I can develop APIs with REST/GraphQL architecture' },
  { title: 'Front-end', icon: iconLoader('fa-code', 22, theme.green), description: 'Front-end develop with React and Nextjs' },
  { title: 'Deployment', icon: iconLoader('ai-deploy-unit', 22, theme.green), description: 'Infrastructure with Google Cloud Platform and Vercel' },
];

const tags: string[] = [
  'TypeScript', 'Node.js', 'HTML',
  'CSS', 'Express', 'React',
  'Next.js', 'GraphQL', 'REST',
  'Google Cloud Platform', 'Vercel Platform'
];

const Introduce = (): JSX.Element => {

  return (
    <Styles.IntroduceContent>
      <Skills skills={skills} />
      <About
        devName='Sinésio Neto'
        paragraph={[
          `A freelance developer with main focus on building web solutions
          with a TypeScript and Node.js stack. Beyond HTML and CSS, I'm familiar
          with the Express micro-framework on back-end and the React library on
          front-end, including Next.js and Gatsby frameworks. I'm also learning
          how to develop GraphQL APIs and how this amazing architecture works.`,
          `I'm able to delivery developed web applications with a great
          infrastructure of deployment, mainly hosted on Google Cloud Platform
          and Vercel Platform.`
        ]}
        tags={tags}
      />
    </Styles.IntroduceContent>
  );
};

export default Introduce;
