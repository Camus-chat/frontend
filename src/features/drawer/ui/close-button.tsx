'use client';

import { X } from 'lucide-react';

import { useDrawerStore } from '@/features/drawer/store/open';

import { button } from './styles';

interface Props {
  className?: string;
}

const Open = ({ className }: Props) => {
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);

  return (
    <button
      className={button({ class: className })}
      type='button'
      onClick={closeDrawer}
    >
      <X style={{ background: 'inherit', color: 'white' }} />
    </button>
  );
};

export default Open;
