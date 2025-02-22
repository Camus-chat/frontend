import { Checkbox } from '@heroui/checkbox';
import Link from 'next/link';

import { useSignupDataStore } from '../store/signup-data';

const Agreement = () => {
  const isAgreed = useSignupDataStore((state) => state.isAgreed);
  const setIsAgreed = useSignupDataStore((state) => state.setIsAgreed);

  return (
    <Checkbox
      className='mt-2 max-w-full items-start pr-0'
      isSelected={isAgreed}
      onValueChange={setIsAgreed}
    >
      <p className='text-sm font-light text-gray-400'>
        {"I agree to CAMUS's "}
        <Link href='/terms-of-service' className='font-normal text-blue-600'>
          Terms of Service
        </Link>
        {' and '}
        <Link href='/privacy-notice' className='font-normal text-blue-600'>
          Privacy Policy
        </Link>
        {
          ' which includes my consent to receive marketing information from CAMUS. I can unsubscribe from marketing communications at any time.'
        }
      </p>
    </Checkbox>
  );
};

export default Agreement;
