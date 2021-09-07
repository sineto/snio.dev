import Link from 'next/link';
import { iconLoader } from '../../../helpers';
import * as Styles from './styles';
import theme from '../../../styles/theme';

interface NavContactLinkProps {
  icon: string;
  label: string;
  href: string;
}

const NavContactLink = ({ icon, label, href }: NavContactLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a>
        <Styles.Container>
          {iconLoader(icon, 20, theme.white)}
          <Styles.Label>{label}</Styles.Label>
        </Styles.Container>
      </a>
    </Link>
  );
};

export default NavContactLink;
