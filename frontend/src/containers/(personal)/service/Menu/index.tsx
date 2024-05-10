'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { menu } from '@/containers/(personal)/service/Menu/constants';

import styles from './index.module.scss';

const Menu = () => {
  const [pathname, setPathname] = useState(usePathname().split('/')[2]);

  return (
    <div className={styles.menuWrapper}>
      {menu.map((item) => {
        const style =
          item.key === pathname ? styles.selected : styles.unselected;

        return (
          <Link
            key={item.key}
            href={item.path}
            className={style}
            onClick={() => setPathname(item.key)}
          >
            <item.icon />
            <div>{item.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
