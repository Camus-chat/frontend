'use client';

import { useDrawerStore } from '@/features/drawer/store/open';

import { button } from './styles';
import { Menu } from "lucide-react";

interface Props {
  className?: string;
}

const Open = ({ className }: Props) => {
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  return (
    <button
      className={button({ class: className })}
      type='button'
      onClick={openDrawer}
    >
      <Menu />
    </button>
  );
};

export default Open;
