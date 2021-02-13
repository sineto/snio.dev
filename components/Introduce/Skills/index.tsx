import SkillCard, { SkillCardProps } from './SkillCard';
import * as Styles from './styles';

interface SkillsProps {
  skills: SkillCardProps[]
}

const Skills = ({ skills }: SkillsProps): JSX.Element => {
  return (
    <Styles.Skills>
      {skills.map((props: SkillCardProps) => {
        return (
          <SkillCard
            key={props.title}
            title={props.title}
            icon={props.icon}
            description={props.description}
          />
        );
      })}
    </Styles.Skills>
  );
};

export default Skills;
