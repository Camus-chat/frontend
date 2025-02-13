import Link from 'next/link';

import { Logo, auth } from '@/shared/ui';

import Banner from './banner';
import SignupForm from './signup-form';

const SignupPage = () => {
  const { wrapper, header, main, title, box } = auth();

  return (
    <div className='grid size-full grid-cols-[1fr,auto]'>
      <div className={wrapper()}>
        <header className={header()}>
          <Logo business={false} />
        </header>
        <div className={main()}>
          <h1 className={title()}>Create Your CAMUS Account</h1>
          <span className='mb-6 text-center text-base font-light text-gray-700'>
            Try free for 30 days or get started with our Developer plan
          </span>
          <div className={box()}>
            <div className='mb-4 flex justify-end'>
              <span className='mr-1 text-xs text-gray-500'>
                Already have an account?
              </span>
              <Link
                href='/signin'
                className='text-xs font-medium text-blue-600'
              >
                Sign in
              </Link>
            </div>
            <SignupForm />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default SignupPage;
