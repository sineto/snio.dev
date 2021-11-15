import Image from 'next/image';

import { usePageContent } from '../../../hooks';
import { parseToHtml } from '../../../helpers';

import * as Styles from './styles';

const HeroContent = (): JSX.Element => {
  const { header, socialProfile } = usePageContent();

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
        {header && (
          <>
            <Styles.HeroDisclaimerTag>{header.badge}</Styles.HeroDisclaimerTag>
            <Styles.HeroDisclaimerTitle>
              {parseToHtml(header.title)}
            </Styles.HeroDisclaimerTitle>
            <Styles.HeroDisclaimerSubTitle>
              {header.subTitle}
            </Styles.HeroDisclaimerSubTitle>
          </>
        )}
        {socialProfile && (
          <Styles.HeroContactButton
            href={`mailto:${socialProfile.email}?subject=Mail from our Website`}
          >
            Say hi!
          </Styles.HeroContactButton>
        )}
      </Styles.HeaderHeroDisclaimer>

      <TechLogos />
    </Styles.HeaderHeroContent>
  );
};

export default HeroContent;
