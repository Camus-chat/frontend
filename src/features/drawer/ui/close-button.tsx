'use client';

import CloseIcon from '@mui/icons-material/Close';

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
      <CloseIcon className='bg-inherit fill-inherit' />
    </button>
  );
};

export default Open;
