import { ReactNode } from 'react';

import styles from '@/app/service/layout.module.scss';
import Header from '@/components/Header';

const ServiceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header signedIn />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default ServiceLayout;
