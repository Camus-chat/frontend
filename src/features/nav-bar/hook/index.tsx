import { getIsBizDomain } from '@/features/nav-bar/api/getIsBizDomain';
import Logo from '@/features/nav-bar/ui/logo';
import NavigationMenu from '@/features/nav-bar/ui/nav-menu';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const useNavigationBar = async () => {
  const isBizDomain = await getIsBizDomain();

  const NavigationBar = ({ children }: Props) => {
    return (
      <div className='flex items-center justify-between max-w-screen-xl mx-auto max-md:py-4 md:h-[56px] px-5 md:px-7 xl:px-5'>
        <Logo business={isBizDomain} />
        {children}
      </div>
    );
  };

  const Menu = () => <NavigationMenu business={isBizDomain} />;

  return {
    NavigationBar,
    NavigationMenu: Menu,
  };
};
