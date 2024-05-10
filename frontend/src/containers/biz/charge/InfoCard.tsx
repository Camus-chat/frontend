import classNames from 'classnames';

import styles from './index.module.scss';
import InfoTextBox from '@/components/InfoTextBox';

interface Props {
  title: string;
  content: string;
  color: string;
}

const InfoCard = ({ title, content, color }: Props) => {
  return (
    <div className={styles.card}>
      <div className={classNames(styles.animationBox, styles[color])} />
      <div className={styles.textBox}>
        <InfoTextBox size='small' title={title} content={content} />
      </div>
    </div>
  );
};

export default InfoCard;
