import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children?: ReactNode;
  biz?: boolean;
}

const Logo = ({ children, biz }: Props) => {
  return (
    <div className={styles.navBar}>
      <Link href='/'>
        <div className={styles.logo}>
          <Image src='/images/logo.svg' alt='logo' width={40} height={40} />
          <div>CAMUS</div>
          {biz && <div className={styles.biz}>BIZ</div>}
        </div>
      </Link>

      {children}
    </div>
  );
};

export default Logo;
