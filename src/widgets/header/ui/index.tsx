import { ChevronRight } from 'lucide-react';
import { tv } from 'tailwind-variants';

import { Drawer, DrawerClose, DrawerOpen } from '@/features/drawer';
import { ROUTE } from '@/shared/config';
import { Logo } from '@/shared/ui';

import { NAVIGATIONS } from '../config/navigation';
import DrawerLink from './drawer-item/link';
import NavigationBelt from './nav-belt';
import Login from './nav-login';

interface Props {
  business?: boolean;
  className?: string;
  isFixed?: boolean;
  children?: ReactNode;
}

const createStyle = tv({
  slots: {
    base: 'w-full bg-background',
    wrapper: 'wrapper flex h-14 items-center justify-between md:h-16',
  },
  variants: {
    isFixed: {
      true: {
        base: 'fixed z-10',
      },
    },
  },
});

const Header = async ({ business, className, isFixed, children }: Props) => {
  const isBusiness = !!business;
  const navigationMenuItems = business
    ? NAVIGATIONS.business
    : NAVIGATIONS.personal;

  const styles = createStyle({ isFixed });

  return (
    <header className={styles.base()}>
      <NavigationBelt business={isBusiness} className={className} />
      <div className={styles.wrapper({ className })}>
        <Logo business={isBusiness} />
        {children}
        <Login className='max-md:hidden' />
        <DrawerOpen className='md:hidden' />
      </div>
      <Drawer className='fixed md:hidden'>
        <div className='flex flex-col items-end bg-neutral-800'>
          <DrawerClose className='m-3 text-background' />
          <DrawerLink
            className='gap-1 font-medium text-background'
            path={ROUTE.login}
          >
            로그인해주세요
            <ChevronRight />
          </DrawerLink>
        </div>
        <DrawerLink path={ROUTE.signup}>회원가입</DrawerLink>
      </Drawer>
    </header>
  );
};

export default Header;
