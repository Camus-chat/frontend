import { Button } from '@heroui/react';

import Agreement from '@/pages/support/ui/agreement';
import Banner from '@/pages/support/ui/banner';
import InputCompany from '@/pages/support/ui/input-company';
import InputEmail from '@/pages/support/ui/input-email';
import InputName from '@/pages/support/ui/input-name';
import RequestButton from '@/pages/support/ui/request-button';

const SupportPage = () => {
  return (
    <div
      className='grid min-h-screen grid-cols-1 bg-cover bg-center bg-no-repeat px-20 py-20 lg:grid-cols-2 lg:py-32'
      style={{ backgroundImage: "url('/images/background-support.svg')" }}
    >
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
        <div className='flex w-full max-w-[540px] items-center justify-between rounded-lg bg-white px-4 py-2'>
          <p>이미 CAMUS 계정이 있으신가요?</p>
          <Button color='primary' variant='light'>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
