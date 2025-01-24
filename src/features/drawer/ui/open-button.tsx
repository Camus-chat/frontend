'use client';

import MenuIcon from '@mui/icons-material/Menu';

import { useDrawerStore } from '@/features/drawer/store/open';

import { button } from './styles';

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
      <MenuIcon />
    </button>
  );
};

export default Open;
