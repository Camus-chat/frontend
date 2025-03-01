import Link from 'next/link';
import { redirect } from 'next/navigation';

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
}

const Header = async ({ business, loggedInOnly }: Props) => {
  const isBusiness = !!business;
  const navigationMenuItems = business
    ? NAVIGATIONS.business
    : NAVIGATIONS.personal;
  const member = await fetchMemberInfo();
  if (process.env.NODE_ENV === 'production') {
    if (loggedInOnly && !member) {
      redirect(ROUTE.login);
    }
  }

  return (
    <header>
      <NavigationBelt business={isBusiness} />
      <div className='wrapper grid h-14 grid-cols-[auto,1fr] items-center'>
        <Logo business={isBusiness} />
        <span className='flex size-full items-center max-md:hidden'>
          <nav className='mx-auto flex h-full'>
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
          <Login member={member} />
        </span>
        <DrawerOpen className='ml-auto md:hidden' />
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
