import { parseToHtmlWithTags } from '../../../helpers';
import * as Styles from './styles';

interface AboutProps {
  devName: string;
  paragraphs: string[];
  tags: string[];
}

const About = ({ devName, paragraphs, tags }: AboutProps): JSX.Element => {
  return (
    <Styles.IntroduceAbout>
      <Styles.AboutTag>Introduce</Styles.AboutTag>
      <Styles.AboutContent>
        <Styles.AboutTitle>
          Hi! My name is <Styles.AboutDevName>{devName}</Styles.AboutDevName>
        </Styles.AboutTitle>
        {paragraphs.map((p: string, index: number) => {
          return (
            <Styles.AboutBody key={`p-${index}`}>
              {parseToHtmlWithTags(p, tags)}
            </Styles.AboutBody>
          );
        })}
      </Styles.AboutContent>
    </Styles.IntroduceAbout>
  );
};

export default About;
