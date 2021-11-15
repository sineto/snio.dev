import Image from 'next/image';
import Link from 'next/link';
import { iconLoader } from '../../helpers';
import { usePageContent } from '../../hooks';
import * as Styles from './styles';

const Footer = (): JSX.Element => {
  const { socialProfile } = usePageContent();

  return (
    <Styles.Container>
      <Styles.LogoContact>
        <Image
          src='/header-logo-snio.dev.svg'
          alt='snio.dev logo'
          width={150}
          height={33}
          layout='intrinsic'
        />
        {socialProfile && (
          <Styles.LogoContactSocial>
            <li>
              <Link href={socialProfile.github} passHref>
                <a target='_blank' rel='noreferrer'>
                  {iconLoader('fa-github')}
                </a>
              </Link>
            </li>
            <li>
              <Link href={socialProfile.linkedin} passHref>
                <a target='_blank' rel='noreferrer'>
                  {iconLoader('fa-linkedin-in')}
                </a>
              </Link>
            </li>
            <li>
              <Link href={socialProfile.telegram} passHref>
                <a target='_blank' rel='noreferrer'>
                  {iconLoader('fa-telegram')}
                </a>
              </Link>
            </li>
          </Styles.LogoContactSocial>
        )}
      </Styles.LogoContact>
      <Styles.CopyRight>
        <p>Sinésio Neto</p>
        <span>© 2021. All Rights Reserved</span>
      </Styles.CopyRight>
      <Styles.Information>
        <span>Information</span>
        <div>
          {socialProfile && <p>{socialProfile.email}</p>}
          <p>CNPJ: 39.892.808/0001-66</p>
        </div>
      </Styles.Information>
    </Styles.Container>
  );
};

export default Footer;
