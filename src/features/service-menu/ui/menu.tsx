'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tv } from 'tailwind-variants';

import { SERVICE_MENU } from '../config';

const wrapper = tv({
  base: [
    'z-10 flex w-full max-md:absolute max-md:bottom-0 max-md:justify-around',
    'md:h-full md:w-fit md:flex-col md:gap-2 md:bg-default-900 md:pt-2',
  ],
});

const link = tv({
  base: [
    'h-service-menu flex flex-col items-center justify-center gap-1 px-3 text-xs text-default-500',
    'hover:text-default-800 md:hover:text-default-200',
    'md:text-sm',
  ],
  variants: {
    selected: {
      true: [
        'font-semibold text-default-800',
        'md:font-medium md:text-default-200',
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
