import type { FC, ReactNode } from 'react';

import Header from '@/widgets/header';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header business />
      <main>{children}</main>
    </>
  );
};

export default Layout;
