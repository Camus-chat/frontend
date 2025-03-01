import type { FC, ReactNode } from 'react';

import Menu from '@/features/service-menu';
import Header from '@/widgets/header';

interface Props {
  children: ReactNode;
}

const ServiceLayout: FC<Props> = ({ children }) => {
  return (
    <div className='grid size-full grid-rows-[auto,1fr]'>
      <Header LogedInOnly />
      <main className='relative md:bg-default-100'>
        <Menu />
        {children}
      </main>
    </div>
  );
};

export default ServiceLayout;
