'use client';

import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { INFO_CARD } from '@/containers/(personal)/constants';
import styles from '@/containers/(personal)/index.module.scss';
import MainInfoCard from '@/containers/(personal)/MainInfoCard';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const InfoCard = () => {
  return (
    <div className={styles.infoCardWrapper}>
      <MainInfoCard />
      {INFO_CARD.map((item, index) => (
        <section
          className={classNames(styles.card, styles[item.color])}
          key={item.key}
        >
          {index % 2 === 0 && (
            <div className={styles.animationBox}>
              <Lottie
                className={styles.lottie}
                loop
                play
                animationData={item.imgSrc}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          )}
          <div className={styles.content}>
            <div className={styles.title}>{item.title}</div>
            <pre className={styles.description}>{item.description}</pre>
            <Link href={item.path}>
              더 알아보기
              <ExpandCircleDownRoundedIcon />
            </Link>
          </div>
          {index % 2 === 1 && (
            <div className={styles.animationBox}>
              <Lottie
                className={styles.lottie}
                loop
                play
                animationData={item.imgSrc}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default InfoCard;
