import Image from 'next/image';

import NavContactLink from '../NavContactLink';
import * as Styles from './styles';

interface ContactLink {
  icon: string
  label: string
  href: string
}

const TopBar = (): JSX.Element => {
  const contactLinks: ContactLink[] = [
    {
      icon: 'fa-linkedin',
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/sndev/'
    },
    { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/sineto' }
  ];

  return (
    <Styles.HeaderTopBar>
      <Image
        src='/header-logo-snio.dev.svg'
        alt='snio.dev logo'
        width={150}
        height={33}
        layout='intrinsic'
      />

      <Styles.HeaderNavContact>
        {contactLinks.map((link: ContactLink) => {
          return (
            <NavContactLink
              key={link.label}
              icon={link.icon}
              label={link.label}
              href={link.href}
            />
          );
        })}
        <Styles.HeaderNavContactButton>
          <Styles.EnvelopeIcon />
        </Styles.HeaderNavContactButton>
      </Styles.HeaderNavContact>
    </Styles.HeaderTopBar>
  );
};

export default TopBar;
