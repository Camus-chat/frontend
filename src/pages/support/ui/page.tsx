import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import Agreement from '@/pages/support/ui/agreement';
import Banner from '@/pages/support/ui/banner';
import InputCompany from '@/pages/support/ui/input-company';
import InputEmail from '@/pages/support/ui/input-email';
import InputName from '@/pages/support/ui/input-name';
import RequestButton from '@/pages/support/ui/request-button';
import { Hero } from '@/shared/ui';

const SupportPage = () => {
  return (
    <Hero className='bg-[url(/images/background-support.svg)] bg-cover bg-center bg-no-repeat'>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:py-32'>
        <aside className='order-1 bg-transparent p-4 text-center text-gray-900 lg:order-1 lg:ml-12 lg:text-left'>
          <Banner />
        </aside>
        <div className='order-2 flex w-full flex-col items-center justify-start px-16 lg:order-2 lg:items-start'>
          <div className='mb-4 flex w-full max-w-[540px] flex-col gap-3.5 rounded-lg border-2 bg-white p-8'>
            <InputEmail />
            <InputName />
            <InputCompany />
            <Agreement />
            <RequestButton />
          </div>
          <div className='flex w-full max-w-[540px] items-center justify-between rounded-lg bg-white px-4 py-4'>
            <p>이미 CAMUS 계정이 있으신가요?</p>
            <Link
              href='/signin'
              className='flex items-center gap-1 bg-transparent text-indigo-600'
            >
              <p>로그인</p>
              <ArrowRight strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default SupportPage;
