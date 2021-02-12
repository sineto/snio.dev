import Link from 'next/link';
import * as Styles from './styles';

export interface SkillCardProps {
  title: string
  icon: JSX.Element
  description: string
  href?: string
}

const SkillCard = ({ title, icon, description, ...props }: SkillCardProps): JSX.Element => {
  return (
    <Styles.SkillCard>
      <Styles.SkillCardBody>
        <Styles.SkillCardTitle>
          {title}
          {icon}
        </Styles.SkillCardTitle>
        <Styles.SkillCardDesc>
          {description}
        </Styles.SkillCardDesc>
      </Styles.SkillCardBody>
      <Link href='https://snio.dev'>
        <a>
          <Styles.SkillCardLinkCustomers>
            Clients
          </Styles.SkillCardLinkCustomers>
        </a>
      </Link>
    </Styles.SkillCard>
  );
};

export default SkillCard;
