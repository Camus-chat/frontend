import type { FC, ReactNode } from 'react';

import Header from '@/widgets/header';

import AuthProvider from '../provider/auth';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <Header isFixed />
      <main>{children}</main>
    </AuthProvider>
  );
};

export default Layout;
