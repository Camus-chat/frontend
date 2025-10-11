'use client';

import { CircleCheck } from 'lucide-react';
import { useState } from 'react';
import { tv } from 'tailwind-variants';

import { ENTERPRISE, PERSONAL } from '../../constants';

interface Props {
  defaultValue: boolean;
  onSelect: (value: boolean) => void;
}

const style = tv({
  base: [
    'flex items-center justify-center gap-1.5 font-medium duration-300',
    'h-10 min-w-[4rem] rounded-lg px-4 text-sm',
  ],
  variants: {
    selected: {
      true: 'border border-solid border-blue-700 bg-blue-100 text-blue-700 hover:cursor-default',
      false: 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-600',
    },
  },
});

const EnterpriseSelect = ({ defaultValue, onSelect }: Props) => {
  const [selectedKey, setSelectedKey] = useState(defaultValue);

  const select = (value: boolean) => {
    setSelectedKey(value);
    onSelect(value);
  };

  return (
    <div className='grid w-full grid-cols-2 gap-2'>
      <button
        type='button'
        className={style({ selected: selectedKey === PERSONAL })}
        onClick={() => select(PERSONAL)}
      >
        <CircleCheck size={16} />
        Personal
      </button>
      <button
        type='button'
        className={style({ selected: selectedKey === ENTERPRISE })}
        onClick={() => select(ENTERPRISE)}
      >
        <CircleCheck size={16} />
        Enterprise
      </button>
    </div>
  );
};

export default EnterpriseSelect;
