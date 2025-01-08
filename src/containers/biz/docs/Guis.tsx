import { GUIS_DESCRIPTION } from '@/containers/biz/docs/constants';
import styles from '@/containers/biz/docs/index.module.scss';
import InfoBox from '@/containers/biz/docs/InfoBox';

const Guis = () => {
  return (
    <div className={styles.guiWrapper}>
      <div className={styles.introduce}>
        <InfoBox description={GUIS_DESCRIPTION.first} />
      </div>
      <div className={styles.introduce}>
        <InfoBox description={GUIS_DESCRIPTION.second} />
      </div>
    </div>
  );
};

export default Guis;
