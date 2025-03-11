import Link from 'next/link';

import { ROUTE } from '@/shared/config';
import AuthLayout from '@/widgets/auth-layout';

import Agreement from './agreement';
import Banner from './banner';
import EnterpriseSelect from './enterprise-select';
import InputEmail from './input-email';
import InputName from './input-name';
import InputPassword from './input-password';
import SignupButton from './signup-button';

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
        <EnterpriseSelect />
        <InputName />
        <InputEmail />
        <InputPassword />
        <Agreement />
        <SignupButton />
      </AuthLayout>
      <aside>
        <Banner />
      </aside>
    </div>
  );
};

export default SignupPage;
