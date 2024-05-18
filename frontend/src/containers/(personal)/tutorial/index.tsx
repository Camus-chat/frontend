import { ReactNode } from 'react';

import { MENU } from '@/containers/(personal)/tutorial/constants';

import styles from './index.module.scss';
import Header from '@/components/Header';
import ListMenu from '@/components/Header/ListMenu';

interface Props {
  children: ReactNode;
}

const Tutorial = ({ children }: Props) => {
  return (
    <>
      <Header />
      <ListMenu menu={MENU} />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Tutorial;
