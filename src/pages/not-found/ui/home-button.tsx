'use client';

import { useRouter } from 'next/navigation';

import { ROUTE } from '@/shared/config';
import { Button } from '@/shared/ui';

const HomeButton = () => {
  const router = useRouter();

  return (
    <Button
      className='my-5 h-[52px] bg-gradient-to-tr from-indigo-400 to-indigo-800 px-[29px] text-lg font-medium tracking-normal text-white'
      size='lg'
      onClick={() => router.push(ROUTE.home)}
    >
      Home
    </Button>
  );
};

export default HomeButton;
