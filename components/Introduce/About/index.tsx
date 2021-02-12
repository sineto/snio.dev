import { format } from '../../../helpers';
import * as Styles from './styles';

interface AboutProps {
  devName: string
  paragraph: string[]
  tags: string[];
}

const About = ({ devName, paragraph, tags }: AboutProps): JSX.Element => {
  return (
    <Styles.IntroduceAbout>
      <Styles.AboutTag>
        Introduce
      </Styles.AboutTag>
      <Styles.AboutContent>
        <Styles.AboutTitle>
          Hi! My name is{' '}
          <Styles.AboutDevName>
            {devName}
          </Styles.AboutDevName>
        </Styles.AboutTitle>
        {paragraph.map((p: string, index: number) => {
          return (
            <Styles.AboutBody key={`p-${index}`}>
              {format.stringToHtml(p, tags)}
            </Styles.AboutBody>
          )
        })}
        {/* <Styles.AboutBody>
          {format.stringToHtml(`
            A freelance developer with main focus on building web solutions
            with a TypeScript and Node.js stack. Beyond HTML and CSS, I'm familiar
            with the Express micro-framework on back-end and the React library on
            front-end, including Next.js and Gatsby frameworks. I'm also learning
            how to develop GraphQL APIs and how this amazing architecture works.
          `, tags)}
        </Styles.AboutBody>
        <Styles.AboutBody>
          {format.stringToHtml(`
            I'm able to delivery developed web applications with a great
            infrastructure of deployment, mainly hosted on Google Cloud Platform
            and Vercel Platform.
          `, tags)}
        </Styles.AboutBody> */}
      </Styles.AboutContent>
    </Styles.IntroduceAbout>
  );
};

export default About;
