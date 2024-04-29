import Link from 'next/link';

import { NAVIGATIONS } from './constants';

import styles from './index.module.scss';
import Drawer from '@/components/Header/Drawer';
import LoginMenu from '@/components/Header/LoginMenu';
import Logo from '@/components/Header/Logo';
import NavMenu from '@/components/Header/NavMenu';

interface Props {
  biz?: boolean;
  signedIn?: boolean;
}

const Header = ({ biz, signedIn }: Props) => {
  const navItems = biz ? NAVIGATIONS.business : NAVIGATIONS.personal;

  return (
    <header>
      {!signedIn && (
        <div className={styles.navBelt}>
          <div>패밀리 사이트</div>
          <Link href='/'>개인용</Link>
          <Link href='/'>기업용</Link>
        </div>
      )}
      <Logo biz={biz}>
        <NavMenu navItems={navItems} />
        <LoginMenu />
        <Drawer navItems={navItems} signedIn={signedIn} />
      </Logo>
    </header>
  );
};

export default Header;
