import type { FC, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

import Menu from '@/features/service-menu';
import Header from '@/widgets/header';

import AuthProvider from '../provider/auth';

interface Props {
  children: ReactNode;
}

const style = tv({
  base: [
    'relative overflow-y-hidden',
    'h-0 grow', // mobile
    'md:grid md:grid-cols-[auto,1fr] md:bg-default-100', // desktop
  ],
});

const ServiceLayout: FC<Props> = ({ children }) => {
  return (
    <AuthProvider requireAuth={process.env.NODE_ENV !== 'development'}>
      <Header className='max-w-none' />
      <main className={style()}>
        <Menu />
        {children}
      </main>
    </AuthProvider>
  );
};

export default ServiceLayout;
