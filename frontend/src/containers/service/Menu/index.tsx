import Link from 'next/link';

import { menu } from '@/containers/service/Menu/constants';

import styles from './index.module.scss';

interface Props {
  selectedMenuKey: string;
}

const Menu = ({ selectedMenuKey }: Props) => {
  return (
    <div className={styles.menuWrapper}>
      {menu.map((item) => {
        const style =
          item.key === selectedMenuKey ? styles.selected : styles.unselected;

        return (
          <Link key={item.key} href={item.path} className={style}>
            <item.icon />
            <div>{item.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
