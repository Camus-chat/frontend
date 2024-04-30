import { ReactNode } from 'react';

import styles from './index.module.scss';
import Header from '@/components/Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.inputWrapper}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
