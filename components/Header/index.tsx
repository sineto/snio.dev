import Image from 'next/image';

import TopBar from './TopBar';
import HeroContent from './HeroContent';
import * as Styles from './styles';

const Header = (): JSX.Element => {

  return (
    <Styles.Header>
      <TopBar />
      <HeroContent />
    </Styles.Header>
  );
};

export default Header;