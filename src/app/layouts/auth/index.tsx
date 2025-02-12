import { ReactNode } from 'react';

import Logo from '@/features/logo-bar';
import { auth } from '@/shared/ui';

interface Props {
  children: ReactNode;
}

const AccountLayout = async ({ children }: Props) => {
  const { wrapper, header, main } = auth();

  return (
    <div className={wrapper()}>
      <header className={header()}>
        <Logo business={false} />
      </header>
      <main className={main()}>{children}</main>
    </div>
  );
};

export default AccountLayout;
