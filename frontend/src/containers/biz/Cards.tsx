import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import classNames from 'classnames';
import Link from 'next/link';

import { CARD } from '@/containers/biz/constants';
import styles from '@/containers/biz/index.module.scss';

const Cards = () => {
  return (
    <div className={styles.cardWrapper}>
      {CARD.map((item) => (
        <div
          className={classNames(styles.card, styles[item.color])}
          key={item.key}
        >
          <div className={styles.title}>{item.title}</div>
          <button>
            <Link href={item.path}>
              자세히 보기
              <NavigateNextRoundedIcon />
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
