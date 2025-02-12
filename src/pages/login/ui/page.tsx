import Link from 'next/link';

import LogoBar from '@/features/logo-bar';
import { auth } from '@/shared/ui';

import LoginForm from './login-form';

const LoginPage = () => {
  const { wrapper, header, main, title, box } = auth();
  return (
    <div className={wrapper()}>
      <header className={header()}>
        <LogoBar business={false} />
      </header>
      <main className={main()}>
        <h1 className={title({ class: 'mb-6' })}>Sign into your account</h1>
        <div className={box()}>
          <LoginForm />
        </div>
        <div className='py-6'>
          <Link className='text-small font-medium text-blue-500' href='/forgot'>
            Forgot your password?
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
