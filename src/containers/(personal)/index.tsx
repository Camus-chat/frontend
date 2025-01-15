import InfoCard from '@/containers/(personal)/InfoCard';
import Header from '@/widgets/header';

import styles from './index.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <InfoCard />
      </main>
    </>
  );
};

export default Home;
