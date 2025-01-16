import Logo from '@/features/logo-bar/ui/logo';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  business: boolean;
}

const Bar = ({ children, business }: Props) => {
  return (
    <div className='grid grid-cols-[auto,1fr] items-center wrapper max-md:py-4 md:h-[56px]'>
      <Logo business={business} />
      {children}
    </div>
  );
};

export default Bar;
