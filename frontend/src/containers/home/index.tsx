import Image from 'next/image';
import Link from 'next/link';

import { DESCRIPTION } from '@/containers/home/constants';
import styles from '@/containers/home/index.module.scss';
import InfoCard from '@/containers/home/InfoCard';

import Header from '@/components/Header';

const Home = () => {
  // TODO: 이미지 바꿔야함.
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.firstWrapper}>
          <div className={styles.content}>
            <pre> {DESCRIPTION} </pre>
            <Link href='/tutorial/channel'>자세히 알아보기</Link>
          </div>
          <div className={styles.image}>
            <Image
              src='/images/landing.svg'
              alt='image'
              width='422'
              height='526'
            />
          </div>
        </div>
        <div className={styles.secondWrapper}>
          <InfoCard />
        </div>
      </div>
    </>
  );
};

export default Home;
