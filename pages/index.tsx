import { Header, Introduce } from '../components';
import * as Styles from './styles';

const Home = () => {
  return (
    <Styles.Container>
      <Header />
      <Introduce />
    </Styles.Container>
  );
};

export default Home;