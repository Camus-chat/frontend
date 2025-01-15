import Login from '@/features/login';
import { useNavigationBar } from '@/features/nav-bar';

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
        <div className='size-full flex items-center max-md:hidden'>
          <NavigationMenu />
          <Login />
        </div>
      </NavigationBar>
    </header>
  );
};

export default Header;
