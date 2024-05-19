import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Image from 'next/image';

import { TITLE_CONTENT } from '@/containers/(personal)/constants';
import styles from '@/containers/(personal)/index.module.scss';

const MainInfoCard = () => {
  return (
    <div className={styles.mainCardWrapper}>
      <div className={styles.imageBox}>
        <div className={styles.chatBubble}>
          <Image
            src='/images/chatBubbles.svg'
            alt='이미지'
            width={1460}
            height={480}
          />
        </div>
        <div className={styles.titleContent}>
          <div className={styles.title}>{TITLE_CONTENT.title}</div>
          <div className={styles.description}>{TITLE_CONTENT.description}</div>
        </div>
      </div>
      <div className={styles.scrollPointer}>
        자세히 알아보기
        <ArrowForwardIosRoundedIcon />
      </div>
    </div>
  );
};

export default MainInfoCard;
