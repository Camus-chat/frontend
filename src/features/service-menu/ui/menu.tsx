'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tv } from 'tailwind-variants';

import { SERVICE_MENU } from '../config';

const wrapper = tv({
  base: [
    // mobile
    'z-10 flex w-full bg-background max-md:fixed max-md:bottom-0 max-md:justify-around',
    // desktop
    'md:h-full md:w-fit md:flex-col md:gap-2 md:bg-default-900 md:pt-2',
  ],
});

const link = tv({
  base: [
    'mx-1 flex size-service-menu flex-col items-center justify-center gap-1 rounded-md text-xs text-default-400',
    'md:hover:bg-default-800',
    'md:text-sm md:text-default-500',
  ],
  variants: {
    selected: {
      true: [
        'cursor-default font-semibold text-default-800',
        'md:font-medium md:text-default-100',
      ],
    },
  },
});

const Menu = () => {
  const pathname = usePathname()?.split('/')[2];

  return (
    <div className={wrapper()}>
      {SERVICE_MENU.map((item) => (
        <Link
          key={item.key}
          href={item.path}
          className={link({ selected: item.key === pathname })}
        >
          <item.icon />
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
