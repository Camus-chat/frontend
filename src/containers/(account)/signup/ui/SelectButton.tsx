'use client';

import { Button } from '@/shared/ui';
import { useAccountStore } from '@/states/account';

import { ENTERPRISE, PERSONAL } from '../../login/constants';

const CheckCircleIcon = () => {
  return (
    <svg
      className='mr-1.5 h-4 w-4 text-inherit'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        fill-rule='evenodd'
        d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z'
        clip-rule='evenodd'
      />
    </svg>
  );
};

const SelectButton = () => {
  const { isEnterprise, setIsEnterprise } = useAccountStore((state) => ({
    isEnterprise: state.isEnterprise,
    setIsEnterprise: state.setIsEnterprise,
  }));

  const enterpriseColor = isEnterprise ? 'selected' : 'gray';
  const personalColor = isEnterprise ? 'gray' : 'selected';

  const handleClick = (clickedValue: boolean) => {
    setIsEnterprise(clickedValue);
  };

  return (
    <div className='grid w-full grid-cols-2 gap-2 py-2'>
      <Button
        size='large'
        color={enterpriseColor}
        onClick={() => handleClick(ENTERPRISE)}
      >
        <CheckCircleIcon />
        기업회원
      </Button>
      <Button
        size='large'
        color={personalColor}
        onClick={() => handleClick(PERSONAL)}
      >
        <CheckCircleIcon />
        개인회원
      </Button>
    </div>
  );
};

export default SelectButton;
