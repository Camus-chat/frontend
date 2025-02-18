import { ReactNode } from 'react';

import styles from '@/containers/guest/index.module.scss';
import { Logo } from '@/shared/ui';

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <header className='max-md:px-2 md:py-1 xl:pt-8 xl:drop-shadow-sm'>
        <Logo business={false} />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default GuestLayout;
