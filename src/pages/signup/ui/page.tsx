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
            <SignupForm />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default SignupPage;
