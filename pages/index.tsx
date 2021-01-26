import Image from 'next/image';

import { NavContactLink } from '../components';
import * as Styles from './styles';

interface ContactLink {
  icon: string
  label: string
  href: string
}

const Home = () => {
  const contactLinks: ContactLink[] = [
    { icon: 'fa-linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/in/sndev/' },
    { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/sineto' }
  ];

  return (
    <Styles.Container>
      <Styles.Header>
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
              )
            })}
            <Styles.HeaderNavContactButton>
              <Styles.EnvelopeIcon />
            </Styles.HeaderNavContactButton>
          </Styles.HeaderNavContact>
        </Styles.HeaderTopBar>

        <Styles.HeaderHeroContent>
          <Styles.HeaderHeroDisclaimer>
            <Styles.HeroDisclaimerTag>
              Web Developer
            </Styles.HeroDisclaimerTag>
            <Styles.HeroDisclaimerTitle>
              Hey! I'm Sinésio Neto,<br />
              a freelance Fullstack<br />
              Developer.
            </Styles.HeroDisclaimerTitle>
            <Styles.HeroDisclaimerSubTitle>
              I enjoy build web solutions!
            </Styles.HeroDisclaimerSubTitle>
            <Styles.HeroContactButton>
              Say hi!
            </Styles.HeroContactButton>
          </Styles.HeaderHeroDisclaimer>
          <Styles.HeroTechLogosContainer>
            <Image
              src='/typescript-logo.png'
              alt='Typescript logo'
              width={150}
              height={99}
              layout='intrinsic'
            />
            <Image
              src='/node.png'
              alt='Node.js logo'
              width={150}
              height={169}
              layout='intrinsic'
            />
            <Image
              src='/react.png'
              alt='React logo'
              width={150}
              height={134}
              layout='intrinsic'
            />
          </Styles.HeroTechLogosContainer>
        </Styles.HeaderHeroContent>
      </Styles.Header>
      <h1>teste</h1>
    </Styles.Container>
  );
};

export default Home;