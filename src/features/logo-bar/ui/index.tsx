import type { ReactNode } from 'react';

import Logo from './logo';

interface Props {
  children?: ReactNode;
  business: boolean;
}

const Bar = ({ children, business }: Props) => {
  return (
    <div className='grid grid-cols-[auto,1fr] items-center'>
      <Logo business={business} />
      {children}
    </div>
  );
};

export default Bar;
