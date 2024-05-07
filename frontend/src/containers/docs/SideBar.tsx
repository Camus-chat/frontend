import Link from 'next/link';

import { MENU } from '@/containers/docs/constants';
import styles from '@/containers/docs/index.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.title}> AI 감정분석</div>
      <div className={styles.navMenu}>
        {MENU.map((item) => (
          <div key={item.key} className={styles.navItem}>
            <Link href='/'>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
