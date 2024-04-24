import Link from 'next/link';

import { NAVIGATIONS } from './constants';

import styles from './index.module.scss';
import Drawer from '@/components/Header/Drawer';
import LoginMenu from '@/components/Header/LoginMenu';
import Logo from '@/components/Header/Logo';
import NavMenu from '@/components/Header/NavMenu';

interface Props {
  biz?: boolean;
}

const Header = ({ biz }: Props) => {
  const navItems = biz ? NAVIGATIONS.business : NAVIGATIONS.personal;

  return (
    <header>
      <div className={styles.navBelt}>
        <div>패밀리 사이트</div>
        <Link href='/'>개인용</Link>
        <Link href='/'>기업용</Link>
      </div>
      <div className={styles.navBar}>
        <Link href='/'>
          <Logo biz={biz} />
        </Link>
        <NavMenu navItems={navItems} />
        <LoginMenu />
        <Drawer navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
