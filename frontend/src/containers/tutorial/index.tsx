import { ReactNode } from 'react';

import styles from './index.module.scss';
import Header from '@/components/Header';

interface Props {
  children: ReactNode;
}

const Tutorial = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Tutorial;
