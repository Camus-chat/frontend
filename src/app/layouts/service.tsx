import type { FC, ReactNode } from 'react';

import Menu from '@/features/service-menu';
import Header from '@/widgets/header';

interface Props {
  children: ReactNode;
}

const ServiceLayout: FC<Props> = ({ children }) => {
  return (
    <div className='grid size-full grid-rows-[auto,1fr]'>
      <Header className='max-w-none md:h-16' loggedInOnly />
      <main className='relative md:grid md:grid-cols-[auto,1fr] md:bg-default-100'>
        <Menu />
        {children}
      </main>
    </div>
  );
};

export default ServiceLayout;
