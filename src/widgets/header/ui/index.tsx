import Link from 'next/link';

import { Drawer, DrawerClose, DrawerOpen } from '@/features/drawer';
import NavigationBar from '@/features/logo-bar';

import DrawerLogin from './drawer-item/login';
import NaviationBelt from './nav-belt';
import Login from './nav-login';
import { NAVIGATIONS } from '../config/navigation';

interface Props {
  business?: boolean;
}

const Header = ({ business }: Props) => {
  const isBusiness = !!business;
  const navigationMenuItems = business
    ? NAVIGATIONS.business
    : NAVIGATIONS.personal;

  return (
    <header>
      <NaviationBelt business={isBusiness} />
      <NavigationBar business={isBusiness}>
        <span className='size-full flex items-center max-md:hidden'>
          <nav className='h-full flex mx-auto'>
            {navigationMenuItems.map((item) => (
              <Link
                className='px-4 text-sm font-medium h-full flex items-center hover:text-blue-700'
                key={item.key}
                href={item.path}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Login />
        </span>
        <DrawerOpen className='md:hidden ml-auto' />
      </NavigationBar>
      <Drawer className='text-lg font-semibold md:hidden'>
        <div className='flex flex-col items-end bg-neutral-800'>
          <DrawerClose className='m-3 fill-white bg-transparent' />
          <DrawerLogin />
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
