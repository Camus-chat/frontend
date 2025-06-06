import type { FC, ReactNode } from 'react';

import Menu from '@/features/service-menu';
import Header from '@/widgets/header';

import AuthProvider from '../provider/auth';

interface Props {
  children: ReactNode;
}

const ServiceLayout: FC<Props> = ({ children }) => {
  return (
    <AuthProvider requireAuth={process.env.NODE_ENV !== 'development'}>
      <Header className='max-w-none' />
      <main className='relative grow overflow-y-hidden md:grid md:grid-cols-[auto,1fr] md:bg-default-100'>
        <Menu />
        {children}
      </main>
    </AuthProvider>
  );
};

export default ServiceLayout;
