import Logo from '@/features/nav-bar/ui/logo';
import NavigationMenu from '@/features/nav-bar/ui/nav-menu';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const useNavigationBar = (business?: boolean) => {
  const NavigationBar = ({ children }: Props) => {
    return (
      <div className='grid grid-cols-[auto,1fr] items-center wrapper max-md:py-4 md:h-[56px]'>
        <Logo business={business} />
        {children}
      </div>
    );
  };

  const Menu = () => <NavigationMenu business={business} />;

  return {
    NavigationBar,
    NavigationMenu: Menu,
  };
};
