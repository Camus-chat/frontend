import Logo from '@/features/nav-bar/ui/logo';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const NavigationBar = ({ children }: Props) => {
  return (
    <div className='flex justify-between max-w-screen-xl mx-auto py-4 sm:py-3 px-5 md:px-7 xl:px-5'>
      <Logo />
      {children}
    </div>
  );
};

export default NavigationBar;
