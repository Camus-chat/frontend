import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { BIZ_DOMAIN_NAME, BIZ_PATH, DOMAIN_NAME } from '@/shared/config';

const style = tv({
  slots: {
    wrapper: 'wrapper flex gap-3 py-2 text-xs max-md:hidden',
    link: 'hover:text-blue-700',
  },
});

const NavigationBelt: FC<{
  business: boolean;
  className?: string;
}> = ({ business, className }) => {
  if (!DOMAIN_NAME || !BIZ_DOMAIN_NAME) {
    return null;
  }

  const businessPath = business ? BIZ_PATH : BIZ_DOMAIN_NAME;
  const defaultPath = !business ? '/' : DOMAIN_NAME;

  const styles = style();

  return (
    <div className={styles.wrapper({ className })}>
      <div className='text-gray-500'>패밀리 서비스</div>
      <Link className={styles.link()} href={defaultPath}>
        개인용
      </Link>
      <Link className={styles.link()} href={businessPath}>
        기업용
      </Link>
    </div>
  );
};

export default NavigationBelt;
