import { Drawer, DrawerClose, DrawerOpen } from '@/features/drawer';
import Login from '@/features/login';
import { useNavigationBar } from '@/features/nav-bar';

import DrawerLogin from './drawer-item/login';
import NaviationBelt from './nav-belt';

interface Props {
  business?: boolean;
}

const Header = ({ business }: Props) => {
  const { NavigationBar, NavigationMenu } = useNavigationBar(business);

  return (
    <header>
      <NaviationBelt business={!!business} />
      <NavigationBar>
        <span className='size-full flex items-center max-md:hidden'>
          <NavigationMenu />
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
