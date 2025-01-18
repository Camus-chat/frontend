import { ReactNode } from 'react';

import { MENU } from '@/containers/support/constants';
import Header from '@/widgets/header';

import styles from './index.module.scss';
import Menu from '@/components/Menu';

interface Props {
  children: ReactNode;
}

const SupportLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Menu menu={MENU} />
      <div className={styles.container}>
        <div className={styles.inputWrapper}>{children}</div>
      </div>
    </>
  );
};

export default SupportLayout;
