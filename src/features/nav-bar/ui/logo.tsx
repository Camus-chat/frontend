import Image from 'next/image';
import Link from 'next/link';

import { getIsBizDomain } from '@/features/nav-bar/api/getIsBizDomain';

const Logo = async () => {
  const isBizDomain = await getIsBizDomain();

  return (
    <Link href='/' className='flex items-end'>
      <Image
        className='w-[24px] h-[24px] md:w-[40px] md:h-[40px] mr-0.5 md:mr-1'
        src='/images/logo.svg'
        alt='logo'
        width={1}
        height={1}
      />
      <span className='text-sm md:text-3xl font-semibold'>CAMUS</span>
      {isBizDomain && (
        <span className='text-sm md:text-3xl font-light'>BIZ</span>
      )}
    </Link>
  );
};

export default Logo;
