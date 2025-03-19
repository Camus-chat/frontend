import { redirect } from 'next/navigation';

import { MemberProvider, requestMemberInfo } from '@/entities/member';
import { getToken } from '@/shared/api';
import { ROUTE } from '@/shared/config';
import { TokenProvider } from '@/shared/store';

const AuthProvider: FC<{
  children: ReactNode;
  requireAuth?: boolean;
}> = async ({ children, requireAuth }) => {
  const token = await getToken();
  const member = token ? await requestMemberInfo() : null;

  if (requireAuth && !member) {
    redirect(ROUTE.login);
  }

  return (
    <TokenProvider token={token}>
      <MemberProvider member={member}>{children}</MemberProvider>
    </TokenProvider>
  );
};

export default AuthProvider;
