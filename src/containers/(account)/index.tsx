import { ReactNode } from 'react';

import Logo from '@/features/logo-bar';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
}

const AccountLayout = async ({ children }: Props) => {
  return (
    <>
      <header className='max-md:px-2 xl:pt-8 md:py-1 xl:drop-shadow-sm'>
        <Logo business={false} />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default AccountLayout;
