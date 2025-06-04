'use client';

import { Checkbox } from '@heroui/react';
import Link from 'next/link';

import { useAssistDataStore } from '@/pages/support/store/assist-data';

const Agreement = () => {
  const isAgreed = useAssistDataStore((state) => state.isAgreed);
  const setIsAgreed = useAssistDataStore((state) => state.setIsAgreed);

  return (
    <Checkbox
      className='mt-2 max-w-full items-start pr-0'
      isSelected={isAgreed}
      onValueChange={setIsAgreed}
    >
      <p className='text-sm font-light text-gray-400'>
        {'CAMUS의 '}
        <Link href='/terms-of-service' className='font-normal text-blue-600'>
          서비스 약관
        </Link>
        {' 및 '}
        <Link href='/privacy-notice' className='font-normal text-blue-600'>
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
