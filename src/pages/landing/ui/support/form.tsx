'use client';

import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { ROUTE } from '@/shared/config';

import Agreement from './agreement';
import SupportInput from './input';
import RequestButton from './request-button';

const createStyle = tv({
  slots: {
    wrapper: [
      'w-full max-w-[500px] md:max-w-[620px] lg:w-1/2',
      'flex flex-col gap-6',
    ],
    form: ['px-6 py-8', 'border border-2 border-indigo-600'],
    inputWrapper: 'xs:flex-row xs:gap-2',
    login: ['flex items-center justify-between px-8 py-6 text-lg'],
  },
  compoundSlots: [
    {
      slots: ['form', 'inputWrapper'],
      class: 'flex flex-col gap-5',
    },
    {
      slots: ['form', 'login'],
      class: 'rounded-large bg-background',
    },
  ],
});

const SupportForm = () => {
  const styles = createStyle();

  return (
    <div className={styles.wrapper()}>
      <div className={styles.form()}>
        <SupportInput
          label='업무용 이메일'
          placeholder='이메일 주소'
          valueSelector={(state) => state.email}
          setValueSelector={(state) => state.setEmail}
          errorSelector={(state) => state.emailError}
        />
        <div className={styles.inputWrapper()}>
          <SupportInput
            label='성'
            placeholder='홍'
            valueSelector={(state) => state.lastName}
            setValueSelector={(state) => state.setLastName}
            errorSelector={(state) => state.lastNameError}
          />
          <SupportInput
            label='이름'
            placeholder='길동'
            valueSelector={(state) => state.name}
            setValueSelector={(state) => state.setName}
            errorSelector={(state) => state.nameError}
          />
        </div>
        <SupportInput
          label='회사'
          placeholder='회사명'
          valueSelector={(state) => state.company}
          setValueSelector={(state) => state.setCompany}
          errorSelector={(state) => state.companyError}
        />
        <Agreement />
        <RequestButton />
      </div>
      <div className={styles.login()}>
        이미 CAMUS 계정이 있으신가요?
        <Link
          href={ROUTE.login}
          className='flex items-center gap-2 text-indigo-600'
        >
          로그인
          <LogIn size={20} />
        </Link>
      </div>
    </div>
  );
};

export default SupportForm;
