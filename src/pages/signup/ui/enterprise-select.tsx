'use client';

import { useSignupDataStore } from '@/pages/signup/store/signup-data';
import { Button, CheckCircleIcon } from '@/shared/ui';

import { ENTERPRISE, PERSONAL } from '../constants';

const EnterpriseSelect = () => {
  const selectedKey = useSignupDataStore((state) => state.isEnterprise);
  const onSelect = useSignupDataStore((state) => state.setIsEnterprise);

  return (
    <div className='grid w-full grid-cols-2 gap-2'>
      <Button
        size='md'
        color={selectedKey === PERSONAL ? 'selected' : 'gray'}
        onClick={() => onSelect(PERSONAL)}
      >
        <CheckCircleIcon />
        Personal
      </Button>
      <Button
        size='md'
        color={selectedKey === ENTERPRISE ? 'selected' : 'gray'}
        onClick={() => onSelect(ENTERPRISE)}
      >
        <CheckCircleIcon />
        Enterprise
      </Button>
    </div>
  );
};

export default EnterpriseSelect;
