import { Divider } from '@heroui/react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { ROUTE } from '@/shared/config';
import { Logo } from '@/shared/ui';

const createStyle = tv({
  slots: {
    divider: 'bg-foreground-700 md:hidden',
    column: 'flex flex-col gap-1 md:gap-4',
    title: 'font-semibold text-foreground-200',
    text: 'text-foreground-400',
  },
});

const Footer = () => {
  const styles = createStyle();

  return (
    <footer className='hero w-full bg-foreground-900'>
      <div className='wrapper'>
        <div className='flex grid-cols-6 flex-col gap-5 px-2 md:grid'>
          <div
            className={styles.column({
              class: 'col-start-1 col-end-3',
            })}
          >
            <Logo className='text-foreground-200' business={false} />
          </div>
          <Divider className={styles.divider()} />
          <div className={styles.column({ class: 'col-start-5' })}>
            <span className={styles.title()}>서비스</span>
            <Link className={styles.text()} href={ROUTE.chat}>
              채팅
            </Link>
            <Link className={styles.text()} href={ROUTE.channel}>
              채널
            </Link>
          </div>
          <Divider className={styles.divider()} />
          <div className={styles.column({ class: 'col-start-6' })}>
            <span className={styles.title()}>계정</span>
            <Link className={styles.text()} href={ROUTE.login}>
              로그인
            </Link>
          </div>
          <Divider className={styles.divider()} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
