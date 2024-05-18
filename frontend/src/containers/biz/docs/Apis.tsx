import { APIS_DESCRIPTION } from '@/containers/biz/docs/constants';
import styles from '@/containers/biz/docs/index.module.scss';
import InfoBox from '@/containers/biz/docs/InfoBox';

const Apis = () => {
  return (
    <div className={styles.apiWrapper}>
      <div className={styles.introduce}>
        <InfoBox description={APIS_DESCRIPTION.first} />
      </div>
      <div className={styles.introduce}>
        <InfoBox description={APIS_DESCRIPTION.second} />
      </div>
    </div>
  );
};

export default Apis;
