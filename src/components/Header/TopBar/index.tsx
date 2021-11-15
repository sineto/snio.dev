import Image from 'next/image';
import { usePageContent } from '../../../hooks';

import NavContactLink from '../NavContactLink';
import * as Styles from './styles';

interface ContactLink {
  icon: string;
  label: string;
  href: string;
}

const TopBar = (): JSX.Element => {
  const { socialProfile } = usePageContent();

  let contactLinks: ContactLink[];
  if (socialProfile) {
    contactLinks = [
      {
        icon: 'fa-linkedin',
        label: 'linkedin',
        href: socialProfile.linkedin
      },
      { icon: 'fa-github', label: 'github', href: socialProfile.github }
    ];
  }

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
        {(contactLinks || []).map((link: ContactLink) => {
          return (
            <NavContactLink
              key={link.label}
              icon={link.icon}
              label={link.label}
              href={link.href}
            />
          );
        })}
        {socialProfile && (
          <Styles.HeaderNavContactButton
            href={`mailto:${socialProfile.email}?subject=Mail from our Website`}
          >
            <Styles.EnvelopeIcon />
          </Styles.HeaderNavContactButton>
        )}
      </Styles.HeaderNavContact>
    </Styles.HeaderTopBar>
  );
};

export default TopBar;
