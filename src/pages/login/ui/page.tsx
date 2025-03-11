import Link from 'next/link';

import { ROUTE } from '@/shared/config';
import AuthLayout from '@/widgets/auth-layout';

import LoginForm from './login-form';

const LoginPage = () => {
  return (
    <AuthLayout
      title='Sign into your account'
      bottomContent={
        <Link className='text-small font-medium text-blue-500' href='/forgot'>
          Forgot your password?
        </Link>
      }
    >
      <div className='flex justify-end'>
        <span className='mr-1 text-xs text-gray-500'>
          {`Don't have an account?`}
        </span>
        <Link href={ROUTE.signup} className='text-xs font-medium text-blue-600'>
          Sign up
        </Link>
      </div>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
