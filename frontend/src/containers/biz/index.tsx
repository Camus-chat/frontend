import { LANDING_DESCRIPTION } from '@/containers/biz/constants';
import styles from '@/containers/biz/index.module.scss';

import Header from '@/components/Header';

const BizHome = () => {
  return (
    <>
      <Header biz />
      <div className={styles.container}>
        <div className={styles.firstWrapper}>
          <div className={styles.content}>
            <pre className={styles.description}>
              {LANDING_DESCRIPTION.first}
            </pre>
            {/* <button type='button' className={styles.moreButton}> */}
            {/*  자세히 알아보기 */}
            {/* </button> */}
          </div>
          <div className={styles.imageBox}>이미지가 들어가야 합니다.</div>
        </div>
        <div className={styles.secondWrapper}>
          <div className={styles.content}>
            <div className={styles.description}>
              {LANDING_DESCRIPTION.second}
            </div>
            {/* <button type='button' className={styles.moreButton}> */}
            {/*  서비스 전체보기 */}
            {/* </button> */}
          </div>
          {/* <Cards /> */}
        </div>
        <div className={styles.thirdWrapper}>
          <div className={styles.description}>{LANDING_DESCRIPTION.third}</div>
          {/* <button type='button'> */}
          {/*  <p>문의하기</p> */}
          {/*  <ExpandCircleDownIcon /> */}
          {/* </button> */}
        </div>
      </div>
    </>
  );
};

export default BizHome;
