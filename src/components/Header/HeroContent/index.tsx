import { useContext } from 'react';
import Image from 'next/image';

import { SanityContext } from '../../../context/SanityContext';
import { parseToHtml } from '../../../helpers/parsers';

import * as Styles from './styles';

const HeroContent = (): JSX.Element => {
  const { header } = useContext(SanityContext);

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
            <Styles.HeroDisclaimerTag>{header.headerBadge}</Styles.HeroDisclaimerTag>
            <Styles.HeroDisclaimerTitle>
              {parseToHtml(header.headerTitle)}
            </Styles.HeroDisclaimerTitle>
            <Styles.HeroDisclaimerSubTitle>
              {header.headerSubTitle}
            </Styles.HeroDisclaimerSubTitle>
          </>
        )}
        <Styles.HeroContactButton>Say hi!</Styles.HeroContactButton>
      </Styles.HeaderHeroDisclaimer>

      <TechLogos />
    </Styles.HeaderHeroContent>
  );
};

export default HeroContent;
