// import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import Link from 'next/link';

import Cards from '@/containers/biz/Cards';
import { LANDING_DESCRIPTION } from '@/containers/biz/constants';
import styles from '@/containers/biz/index.module.scss';
import Header from '@/widgets/header';

const Biz = () => {
  return (
    <>
      <Header biz />
      <div className={styles.container}>
        <div className={styles.firstWrapper}>
          <div className={styles.content}>
            <pre className={styles.description}>
              {LANDING_DESCRIPTION.first}
            </pre>
            <div className={styles.moreButton}>
              <Link href='/docs'>자세히 알아보기</Link>
            </div>
          </div>
          <div className={styles.imageBox} />
        </div>
        <div className={styles.secondWrapper}>
          <div className={styles.content}>
            <div className={styles.description}>
              {LANDING_DESCRIPTION.second}
            </div>
          </div>
          <Cards />
        </div>
        <div className={styles.thirdWrapper}>
          <div className={styles.description}>{LANDING_DESCRIPTION.third}</div>
          <Link href='/' className={styles.link}>
            <p>문의하기</p>
            {/* <ExpandCircleDownRoundedIcon /> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Biz;
