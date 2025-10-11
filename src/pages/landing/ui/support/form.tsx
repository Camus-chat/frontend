'use client';

import { Form } from '@heroui/form';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { tv } from 'tailwind-variants';

import { EMAIL_REGEX, ROUTE } from '@/shared/config';
import { Agreement } from '@/shared/ui';

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
  const { handleSubmit, control } = useForm<SupportFormData>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      agreed: false,
    },
  });

  const onSubmit = (data: SupportFormData) => {
    console.log(data);
    alert('성공적으로 제출되었습니다.');
  };

  return (
    <div className={styles.wrapper()}>
      <Form className={styles.form()} onSubmit={handleSubmit(onSubmit)}>
        <SupportInput
          label='업무용 이메일'
          placeholder='이메일 주소'
          name='email'
          control={control}
          rules={{
            required: '필수 입력 항목입니다.',
            pattern: {
              value: EMAIL_REGEX,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          }}
        />
        <div className={styles.inputWrapper()}>
          <SupportInput
            label='성'
            placeholder='홍'
            name='firstName'
            control={control}
            rules={{ required: '필수 입력 항목입니다.' }}
          />
          <SupportInput
            label='이름'
            placeholder='길동'
            name='lastName'
            control={control}
            rules={{ required: '필수 입력 항목입니다.' }}
          />
        </div>
        <SupportInput
          label='회사'
          placeholder='회사명'
          name='company'
          control={control}
          rules={{ required: '필수 입력 항목입니다.' }}
        />
        <Agreement
          name='agreed'
          control={control}
          rules={{ required: true }}
          classNames={{
            wrapper: 'after:bg-indigo-600',
          }}
        >
          <p className='text-sm font-light text-gray-400'>
            {'CAMUS의 '}
            <Link
              href={ROUTE.termsOfService}
              className='font-normal text-indigo-600'
            >
              서비스 약관
            </Link>
            {' 및 '}
            <Link
              href={ROUTE.privacyNotice}
              className='font-normal text-indigo-600'
            >
              개인정보 보호정책
            </Link>
            {
              ' 에 동의합니다. 이는 CAMUS로부터 마케팅 정보를 수신하는 것에 대한 내 동의를 포함합니다. 마케팅 커뮤니케이션 수신을 언제든지 취소할 수 있습니다.'
            }
          </p>
        </Agreement>
        <RequestButton />
      </Form>
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
