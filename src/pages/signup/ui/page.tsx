import Link from 'next/link';

import { ROUTE } from '@/shared/config';
import AuthLayout from '@/widgets/auth-layout';

import Banner from './banner';
import SignUp from './signup';

const SignupPage = () => {
  return (
    <div className='grid size-full grid-cols-[1fr,auto]'>
      <AuthLayout
        title='Create Your CAMUS Account'
        subtitle='Try free for 30 days or get started with our Developer plan'
      >
        <div className='mb-4 flex justify-end'>
          <span className='mr-1 text-xs text-gray-500'>
            Already have an account?
          </span>
          <Link
            href={ROUTE.login}
            className='text-xs font-medium text-blue-600'
          >
            Sign in
          </Link>
        </div>
        <SignUp />
      </AuthLayout>
      <aside>
        <Banner />
      </aside>
    </div>
  );
};

export default SignupPage;
