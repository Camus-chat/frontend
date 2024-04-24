import Image from 'next/image';

import styles from './index.module.scss';

interface Props {
  biz?: boolean;
}

const Logo = ({ biz }: Props) => {
  return (
    <div className={styles.logo}>
      <Image src='/logo.svg' alt='logo' width={40} height={40} />
      <div>CAMUS</div>
      {biz && <div className={styles.biz}>BIZ</div>}
    </div>
  );
};

export default Logo;
