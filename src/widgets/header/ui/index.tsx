import { ChevronRight } from 'lucide-react';
import { tv } from 'tailwind-variants';

import { Drawer, DrawerClose, DrawerOpen } from '@/features/drawer';
import { ROUTE } from '@/shared/config';
import { Logo, blur } from '@/shared/ui';

import { NAVIGATIONS } from '../config/navigation';
import DrawerLink from './drawer-item/link';
import NavigationBelt from './nav-belt';
import Login from './nav-login';
import HeaderWrapper from './wrapper';

interface Props {
  business?: boolean;
  className?: string;
  position?: 'fixed' | 'sticky';
  children?: ReactNode;
}

const createStyle = tv({
  slots: {
    base: 'z-10 w-full bg-background',
    wrapper: 'wrapper flex h-14 items-center justify-between md:h-16',
  },
  variants: {
    position: {
      fixed: { base: 'fixed' },
      sticky: { base: 'sticky top-0' },
    },
  },
  compoundVariants: [
    {
      position: ['sticky', 'fixed'],
      class: {
        base: blur(),
      },
    },
  ],
});

const Header = ({ business, className, position, children }: Props) => {
  const isBusiness = !!business;
  const navigationMenuItems = business
    ? NAVIGATIONS.business
    : NAVIGATIONS.personal;

  const styles = createStyle({ position });

  return (
    <HeaderWrapper className={styles.base()} animated={!!position}>
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
    </HeaderWrapper>
  );
};

export default Header;
