import { ReactNode } from 'react';

import styles from '@/containers/guest/index.module.scss';

import Logo from '@/components/Header/Logo';

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <div className={styles.wrapper}>
          <Logo />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default GuestLayout;
