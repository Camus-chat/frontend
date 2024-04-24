import Link from 'next/link';

import styles from './index.module.scss';

interface Props {
  navItems: Navigation[];
}

const NavMenu = ({ navItems }: Props) => {
  return (
    <nav className={styles.navMenu}>
      {navItems.map((item) => (
        <Link key={item.name} href={item.path}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
