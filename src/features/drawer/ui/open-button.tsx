'use client';

import MenuIcon from '@mui/icons-material/Menu';

import { useDrawerStore } from '@/features/drawer/store/open';

interface Props {
  className?: string;
}

const Open = ({ className }: Props) => {
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  return (
    <button
      className={`flex items-center ${className}`}
      type='button'
      onClick={openDrawer}
    >
      <MenuIcon />
    </button>
  );
};

export default Open;
