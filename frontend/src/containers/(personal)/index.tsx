import InfoCard from '@/containers/(personal)/InfoCard';
import MainInfoCard from '@/containers/(personal)/MainInfoCard';

import styles from './index.module.scss';
import Header from '@/components/Header';

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
