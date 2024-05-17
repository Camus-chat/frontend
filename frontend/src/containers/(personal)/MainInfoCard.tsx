import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { DESCRIPTION, TITLE } from '@/containers/(personal)/constants';
import styles from '@/containers/(personal)/index.module.scss';

const MainInfoCard = () => {
  return (
    <div className={styles.mainCardWrapper}>
      <div className={styles.content}>
        <div className={styles.title}>{TITLE}</div>
        <div className={styles.description}> {DESCRIPTION} </div>
      </div>
      <div className={styles.scrollPointer}>
        자세히 알아보기
        <ArrowForwardIosRoundedIcon />
      </div>
    </div>
  );
};

export default MainInfoCard;
