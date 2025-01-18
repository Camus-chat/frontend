import { ReactNode } from 'react';

import styles from '@/containers/guest/index.module.scss';
import Logo from '@/features/logo-bar';

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <header className='max-md:px-2 xl:pt-8 md:py-1 xl:drop-shadow-sm'>
        <Logo business={false} />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default GuestLayout;
