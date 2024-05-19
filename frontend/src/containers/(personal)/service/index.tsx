import { ReactNode } from 'react';

import styles from '@/containers/(personal)/service/index.module.scss';
import Menu from '@/containers/(personal)/service/Menu';

import Header from '@/components/Header';

const ServiceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Menu />
        <div className={styles.contentWrapper} id='content-wrapper'>
          {children}
        </div>
      </main>
    </>
  );
};

export default ServiceLayout;
