'use client';

import { Button, CheckCircleIcon } from '@/shared/ui';
import { useAccountStore } from '@/states/account';

import { ENTERPRISE, PERSONAL } from '../../login/constants';

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
    <div className='grid w-full grid-cols-2 gap-2'>
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
