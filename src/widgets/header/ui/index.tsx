import Link from 'next/link';
import { redirect } from 'next/navigation';
import { tv } from 'tailwind-variants';

import { Drawer, DrawerClose, DrawerOpen } from '@/features/drawer';
import { ROUTE } from '@/shared/config';
import { Logo } from '@/shared/ui';

import { fetchMemberInfo } from '../api/member-info';
import { NAVIGATIONS } from '../config/navigation';
import DrawerLogin from './drawer-item/login';
import NavigationBelt from './nav-belt';
import Login from './nav-login';

interface Props {
  business?: boolean;
  loggedInOnly?: boolean;
  className?: string;
}

const wrapper = tv({
  base: 'wrapper flex h-14 items-center justify-between',
  variants: {
    loggedIn: {
      true: 'md:h-16',
    },
  },
});

const Header = async ({ business, loggedInOnly, className }: Props) => {
  const isBusiness = !!business;
  const navigationMenuItems = business
    ? NAVIGATIONS.business
    : NAVIGATIONS.personal;
  const member = await fetchMemberInfo();
  const loggedIn = !!member;
  if (process.env.NODE_ENV === 'production') {
    if (loggedInOnly && !loggedIn) {
      redirect(ROUTE.login);
    }
  }

  return (
    <header>
      {!member && (
        <NavigationBelt business={isBusiness} className={className} />
      )}
      <div className={wrapper({ loggedIn, className })}>
        <Logo business={isBusiness} />
        <nav className='flex h-full max-md:hidden'>
          {navigationMenuItems.map((item) => (
            <Link
              className='flex h-full items-center px-4 text-sm font-medium hover:text-blue-700'
              key={item.key}
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Login member={member} className='max-md:hidden' />
        <DrawerOpen className='md:hidden' />
      </div>
      <Drawer className='fixed text-lg font-semibold md:hidden'>
        <div className='flex flex-col items-end bg-neutral-800'>
          <DrawerClose className='m-3 bg-transparent fill-white' />
          <DrawerLogin />
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
