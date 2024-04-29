import { ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
}

const AccountLayout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.accountBox}>{children}</div>
    </main>
  );
};

export default AccountLayout;
