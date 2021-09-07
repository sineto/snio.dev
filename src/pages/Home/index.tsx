import { Header, Introduce, TechContributions } from '../../../src/components';
import * as Styles from './styles';

const Home = (): JSX.Element => {
  return (
    <Styles.Container>
      <Header />
      <Introduce />
      <TechContributions />
      <Styles.Footer></Styles.Footer>
    </Styles.Container>
  );
};

export default Home;
