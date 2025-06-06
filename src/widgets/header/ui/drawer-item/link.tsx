'use client';

import { Link as HeroUILink } from '@heroui/react';
import { useRouter } from 'next/navigation';

interface Props {
  path: string;
  children: ReactNode;
  className?: string;
}

const DrawerLink = ({ path, className, children }: Props) => {
  const router = useRouter();

  return (
    <div className='w-full bg-transparent p-5'>
      <HeroUILink
        color='foreground'
        size='lg'
        className={`${className} cursor-pointer`}
        onPress={() => router.push(path)}
      >
        {children}
      </HeroUILink>
    </div>
  );
};

export default DrawerLink;
