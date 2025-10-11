'use client';

import { Button } from '@/shared/ui';

const RequestButton = () => {
  return (
    <Button
      type='submit'
      className='w-full bg-gradient-to-tr from-indigo-400 to-indigo-800 text-lg text-white shadow-lg'
      size='lg'
    >
      제출하기
    </Button>
  );
};

export default RequestButton;
