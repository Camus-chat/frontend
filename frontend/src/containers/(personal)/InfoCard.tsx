'use client';

import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import classNames from 'classnames';
import Link from 'next/link';

import { INFO_CARD } from '@/containers/(personal)/constants';
import styles from '@/containers/(personal)/index.module.scss';
import Lottie from "react-lottie-player";
import Image from 'next/image';

const InfoCard = () => {
  return (
    <div className={styles.infoCardWrapper}>
      {INFO_CARD.map((item, index) => (
        <div
          className={classNames(styles.card, styles[item.color])}
          key={item.key}
        >
          {index % 2 === 0 && (
            <Lottie
                loop
                play
              animationData={item.imgSrc}
                style={{width: item.imgWidth, height: item.imgHeight}}
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
              src='./desktop.svg'
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
