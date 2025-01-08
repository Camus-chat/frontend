import { INTRO_DESCRIPTION } from '@/containers/biz/docs/constants';
import styles from '@/containers/biz/docs/index.module.scss';
import InfoBox from '@/containers/biz/docs/InfoBox';

const Introduction = () => {
  return (
    <div className={styles.introductionWrapper}>
      <div className={styles.introduce}>
        <InfoBox description={INTRO_DESCRIPTION.first} />
      </div>
      <div className={styles.introduce}>
        <InfoBox description={INTRO_DESCRIPTION.second} />
      </div>
    </div>
  );
};

export default Introduction;
