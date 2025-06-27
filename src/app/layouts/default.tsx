import type { FC, ReactNode } from 'react';

import AuthProvider from '../provider/auth';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Layout;
