import { GUIDE_DESCRIPTION } from '@/containers/docs/constants';
import styles from '@/containers/docs/index.module.scss';
import InfoBox from '@/containers/docs/InfoBox';

const Guidance = () => {
  return (
    <>
      <div className={styles.introduce}>
        <InfoBox description={GUIDE_DESCRIPTION.first} />
        <div className={styles.hr} />
      </div>
      <div className={styles.introduce}>
        <InfoBox description={GUIDE_DESCRIPTION.second} />
        <div className={styles.document}>기능에 대한 소개를 해주세요.</div>
      </div>
    </>
  );
};

export default Guidance;
