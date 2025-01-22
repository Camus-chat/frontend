import Image from 'next/image';
import Link from 'next/link';

interface Props {
  business: boolean;
}

const Logo = ({ business }: Props) => {
  return (
    <Link href='/' className='flex items-end'>
      <Image
        className='mr-0.5 h-[24px] w-[24px] md:mr-1 md:h-[40px] md:w-[40px]'
        src='/images/logo.svg'
        alt='logo'
        width={1}
        height={1}
      />
      <span className='text-sm font-semibold md:text-3xl'>CAMUS</span>
      {business && <span className='text-sm font-light md:text-3xl'>BIZ</span>}
    </Link>
  );
};

export default Logo;
