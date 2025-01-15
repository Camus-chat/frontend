import Link from 'next/link';

import Login from '@/features/login';
import { useNavigationBar } from '@/features/nav-bar';

interface Props {
  business?: boolean;
}

const Header = ({ business }: Props) => {
  const { NavigationBar, NavigationMenu } = useNavigationBar(business);

  return (
    <header>
      <div className='wrapper flex text-xs py-2 max-md:hidden'>
        <div className='text-gray-500'>패밀리 서비스</div>
        <Link className='ml-3 hover:text-blue-700' href='/public'>
          개인용
        </Link>
        <Link className='ml-3 hover:text-blue-700' href='/biz'>
          기업용
        </Link>
      </div>
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
