import Link from 'next/link';

import { NAVIGATIONS } from './constants';

import styles from './index.module.scss';
// import Drawer from '@/components/Header/Drawer';
// import LoginMemberInfo from '@/components/Header/LoginMemberInfo';
import LoginMenu from '@/components/Header/LoginMenu';
import Logo from '@/components/Header/Logo';
import NavMenu from '@/components/Header/NavMenu';

interface Props {
  biz?: boolean;
}

const Header = async ({ biz }: Props) => {
  // const memberInfo = await query.serverSide.get<MemberInfo>('/member/b2c/info');
  const signedIn = false;

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
        <div className={styles.loginMenu}>
          {!signedIn && <LoginMenu />}
          {/*<LoginMemberInfo signedIn={signedIn} info={memberInfo} />*/}
        </div>
        {/*<Drawer*/}
        {/*  navItems={navItems}*/}
        {/*  signedIn={signedIn}*/}
        {/*  loginMemberInfo={memberInfo}*/}
        {/*/>*/}
      </Logo>
    </header>
  );
};

export default Header;
