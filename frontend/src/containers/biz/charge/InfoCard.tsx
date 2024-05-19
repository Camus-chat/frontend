'use client';

import classNames from 'classnames';
import Lottie from 'react-lottie-player';

import styles from './index.module.scss';
import InfoTextBox from '@/components/InfoTextBox';

interface Props {
  title: string;
  content: string;
  color: string;
  imgSrc: object;
}

const InfoCard = ({ title, content, color, imgSrc }: Props) => {
  return (
    <div className={styles.card}>
      <div className={classNames(styles.animationBox, styles[color])}>
        <Lottie
          className={styles.lottie}
          loop
          play
          animationData={imgSrc}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className={styles.textBox}>
        <InfoTextBox size='small' title={title} content={content} />
      </div>
    </div>
  );
};

export default InfoCard;
