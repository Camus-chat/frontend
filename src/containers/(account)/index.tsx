import { ReactNode } from 'react';

import NavigationBar from '@/features/nav-bar/ui';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
}

const AccountLayout = ({ children }: Props) => {
  return (
    <>
      <header className='max-md:px-2 xl:pt-8 xl:pb-1 xl:drop-shadow-sm'>
        <NavigationBar />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default AccountLayout;
