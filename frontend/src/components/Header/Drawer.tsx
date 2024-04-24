'use client';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import styles from '@/components/Header/index.module.scss';

interface Props {
  navItems: Navigation[];
  signedIn?: boolean;
}

const Drawer = ({ navItems, signedIn }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className={styles.button}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </button>

      {drawerOpen && (
        <div
          className={classNames(styles.drawerWrapper, {
            [styles.signedIn]: signedIn,
          })}
        >
          <div className={styles.drawer}>
            <div className={styles.closeBox}>
              <button
                type='button'
                className={styles.button}
                onClick={() => setDrawerOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <div className={styles.loginBox}>
              <Link href='/'>
                로그인해주세요
                <ExpandMoreIcon />
              </Link>
            </div>
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} className={styles.nav}>
                {item.name}
              </Link>
            ))}
            <Link href='/' className={styles.nav}>
              회원가입
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
