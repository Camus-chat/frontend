'use client';

import { Checkbox } from '@heroui/react';
import Link from 'next/link';
import { type UseControllerProps, useController } from 'react-hook-form';

import { ROUTE } from '@/shared/config';

const Agreement = (props: UseControllerProps<SupportFormData, 'agreed'>) => {
  const {
    field: { value, ...field },
    fieldState: { invalid },
  } = useController(props);

  return (
    <Checkbox
      className='max-w-full items-start pr-0'
      classNames={{
        wrapper: 'after:bg-indigo-600',
      }}
      {...field}
      isSelected={value}
      isInvalid={invalid}
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
    </Checkbox>
  );
};

export default Agreement;
