import SignupForm from '@/containers/(account)/signup/ui/SignupForm';
import LogoBar from '@/features/logo-bar';
import { auth } from '@/shared/ui';

import Banner from './banner';

const SignupPage = () => {
  const { wrapper, header, main } = auth();

  return (
    <div className='grid size-full grid-cols-[1fr,auto]'>
      <div className={wrapper()}>
        <header className={header()}>
          <LogoBar business={false} />
        </header>
        <div className={main()}>
          <h1 className='mb-4 text-center text-4xl font-bold'>
            Create Your CAMUS Account
          </h1>
          <span className='mb-6 text-center text-base font-light text-gray-700'>
            Try free for 30 days or get started with our Developer plan
          </span>
          <SignupForm />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default SignupPage;
