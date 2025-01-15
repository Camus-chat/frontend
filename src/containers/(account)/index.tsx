import { ReactNode } from 'react';

import { useNavigationBar } from '@/features/nav-bar/hook';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
}

const AccountLayout = async ({ children }: Props) => {
  const { NavigationBar } = useNavigationBar();

  return (
    <>
      <header className='max-md:px-2 xl:pt-8 md:py-1 xl:drop-shadow-sm'>
        <NavigationBar />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default AccountLayout;
