import Image from 'next/image';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

interface Props {
  business: boolean;
}

const text = tv({
  base: 'text-xl font-semibold leading-none md:text-3xl',
});

const Logo = ({ business }: Props) => {
  let path = '/';

  if (process.env.NODE_ENV === 'development') {
    if (business) {
      path = '/biz';
    }
  }

  return (
    <Link href={path} className='flex items-end'>
      <Image
        className='mr-0.5 size-6 md:mr-1 md:size-10'
        src='/images/logo.svg'
        alt='logo'
        width={1}
        height={1}
      />
      <span className={text()}>CAMUS</span>
      {business && <span className={text({ class: 'font-light' })}>BIZ</span>}
    </Link>
  );
};

export default Logo;
