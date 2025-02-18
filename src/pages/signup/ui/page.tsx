import Link from 'next/link';

import AuthLayout from '@/widgets/auth-layout';

import Banner from './banner';
import SignupForm from './signup-form';

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
          <Link href='/signin' className='text-xs font-medium text-blue-600'>
            Sign in
          </Link>
        </div>
        <SignupForm />
      </AuthLayout>
      <aside>
        <Banner />
      </aside>
    </div>
  );
};

export default SignupPage;
