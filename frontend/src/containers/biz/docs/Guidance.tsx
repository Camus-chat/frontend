import { GUIDE_DESCRIPTION } from '@/containers/biz/docs/constants';
import styles from '@/containers/biz/docs/index.module.scss';
import InfoBox from '@/containers/biz/docs/InfoBox';

const Guidance = () => {
  return (
    <div className={styles.guidanceWrapper}>
      <div className={styles.introduce}>
        <InfoBox description={GUIDE_DESCRIPTION.first} />
      </div>
      <div className={styles.introduce}>
        <InfoBox description={GUIDE_DESCRIPTION.second} />
      </div>
    </div>
  );
};

export default Guidance;
