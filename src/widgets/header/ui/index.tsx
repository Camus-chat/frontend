import Link from 'next/link';

import { Drawer, DrawerClose, DrawerOpen } from '@/features/drawer';
import NavigationBar from '@/features/logo-bar';

import { NAVIGATIONS } from '../config/navigation';
import DrawerLogin from './drawer-item/login';
import NaviationBelt from './nav-belt';
import Login from './nav-login';

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
          <Login />
        </span>
        <DrawerOpen className='ml-auto md:hidden' />
      </NavigationBar>
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
