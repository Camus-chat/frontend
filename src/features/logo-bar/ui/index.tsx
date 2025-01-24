import type { ReactNode } from 'react';

import Logo from './logo';

interface Props {
  children?: ReactNode;
  business: boolean;
}

const Bar = ({ children, business }: Props) => {
  return (
    <div className='wrapper grid h-14 grid-cols-[auto,1fr] items-center'>
      <Logo business={business} />
      {children}
    </div>
  );
};

export default Bar;
