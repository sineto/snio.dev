import Image from 'next/image';

import * as Styles from './styles';

const HeroContent = (): JSX.Element => {
  const TechLogos = (): JSX.Element => {
    return (
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
    );
  };

  return (
    <Styles.HeaderHeroContent>
      <Styles.HeaderHeroDisclaimer>
        <Styles.HeroDisclaimerTag>Web Developer</Styles.HeroDisclaimerTag>
        <Styles.HeroDisclaimerTitle>
          Hey! I'm Sinésio Neto,
          <br />
          a freelance Fullstack
          <br />
          Developer.
        </Styles.HeroDisclaimerTitle>
        <Styles.HeroDisclaimerSubTitle>
          I enjoy build web solutions!
        </Styles.HeroDisclaimerSubTitle>
        <Styles.HeroContactButton>Say hi!</Styles.HeroContactButton>
      </Styles.HeaderHeroDisclaimer>

      <TechLogos />
    </Styles.HeaderHeroContent>
  );
};

export default HeroContent;
