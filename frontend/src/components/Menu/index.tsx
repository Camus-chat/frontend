'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from '@/components/Menu/index.module.scss';

interface Props {
  menu: Navigation[];
}

const Menu = ({ menu }: Props) => {
  const [pathname, setPathname] = useState<string>('');
  return (
    <div className={styles.listMenu}>
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
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
