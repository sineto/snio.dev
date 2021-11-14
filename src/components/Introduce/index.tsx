import theme from '../../styles/theme';
import { usePageContent } from '../../hooks';
import { iconLoader } from '../../helpers';

import { SkillCardProps } from './Skills/SkillCard';
import About from './About';
import Skills from './Skills';

import * as Styles from './styles';

const Introduce = (): JSX.Element => {
  const { introduce, skills } = usePageContent();

  const buildSkills = (skills: any): SkillCardProps[] => {
    if (!skills) return [];

    const result = [];
    skills.forEach((skill) => {
      const item = {
        title: skill.name,
        icon: iconLoader(skill.icon, 22, theme.green),
        description: skill.description
      };
      result.push(item);
    });

    return result;
  };

  const sanitizeBody = (): string[] => {
    if (!introduce) return [];
    return introduce.body.split('\n').filter((str: string) => str);
  };

  return (
    <Styles.IntroduceContent>
      {skills && <Skills skills={buildSkills(skills)} />}
      {introduce && (
        <About
          devName={introduce.greet}
          paragraphs={sanitizeBody()}
          tags={introduce.keywords}
        />
      )}
    </Styles.IntroduceContent>
  );
};

export default Introduce;
