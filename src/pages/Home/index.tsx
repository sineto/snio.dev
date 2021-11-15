import { Header, Introduce, TechContributions } from '../../../src/components';
import Footer from '../../components/Footer';
import * as Styles from './styles';

const Home = (): JSX.Element => {
  return (
    <Styles.Container>
      <Header />
      <Introduce />
      <TechContributions />
      <Footer />
    </Styles.Container>
  );
};

export default Home;
