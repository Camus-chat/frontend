'use client';

import { tv } from 'tailwind-variants';

import { useSignupDataStore } from '@/pages/signup/store/signup-data';
import { CheckCircleIcon } from '@/shared/ui';

import { ENTERPRISE, PERSONAL } from '../constants';

const style = tv({
  base: [
    'flex items-center justify-center font-medium duration-300',
    'h-10 min-w-[4rem] rounded-lg px-4 text-sm',
  ],
  variants: {
    selected: {
      true: 'border border-solid border-blue-700 bg-blue-100 text-blue-700 hover:cursor-default',
      false: 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-600',
    },
  },
});

const EnterpriseSelect = () => {
  const selectedKey = useSignupDataStore((state) => state.isEnterprise);
  const onSelect = useSignupDataStore((state) => state.setIsEnterprise);

  return (
    <div className='grid w-full grid-cols-2 gap-2'>
      <button
        type='button'
        className={style({ selected: selectedKey === PERSONAL })}
        onClick={() => onSelect(PERSONAL)}
      >
        <CheckCircleIcon />
        Personal
      </button>
      <button
        type='button'
        className={style({ selected: selectedKey === ENTERPRISE })}
        onClick={() => onSelect(ENTERPRISE)}
      >
        <CheckCircleIcon />
        Enterprise
      </button>
    </div>
  );
};

export default EnterpriseSelect;
