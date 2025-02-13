'use client';

import type { Dispatch, SetStateAction } from 'react';

import { Button, CheckCircleIcon } from '@/shared/ui';

import { ENTERPRISE, PERSONAL } from '../constants';

interface Props {
  onSelect: Dispatch<SetStateAction<boolean>>;
  selectedKey: boolean;
}

const EnterpriseSelect = ({ onSelect, selectedKey }: Props) => {
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
