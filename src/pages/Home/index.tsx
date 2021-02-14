import { Header, Introduce, TechContributions } from '../../../components';
import * as Styles from './styles';

const Home = (): JSX.Element => {
  return (
    <Styles.Container>
      <Header />
      <Introduce />
      <TechContributions />
    </Styles.Container>
  );
};

export default Home;
