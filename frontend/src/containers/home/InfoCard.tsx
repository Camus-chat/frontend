import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { INFO_CARD } from '@/containers/home/constants';
import styles from '@/containers/home/index.module.scss';

const InfoCard = () => {
  // TODO: 이미지 추가 하기
  return (
    <div className={styles.infoCardWrapper}>
      {INFO_CARD.map((item, index) => (
        <div
          className={classNames(styles.card, styles[item.color])}
          key={item.key}
        >
          {index % 2 === 0 && (
            <Image
              className={styles.img}
              src={item.imgSrc}
              alt='image'
              width={item.imgWidth}
              height={item.imgHeight}
            />
          )}
          <div className={styles.content}>
            <pre className={styles.description}>{item.description}</pre>
            <Link href={item.path}>
              더 알아보기
              <ExpandCircleDownRoundedIcon />
            </Link>
          </div>
          {index % 2 === 1 && (
            <Image
              className={styles.img}
              src={item.imgSrc}
              alt='image'
              width={item.imgWidth}
              height={item.imgHeight}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
