'use client';

import { useEffect } from 'react';

import { backdrop, drawer } from './styles';
import { useDrawerStore } from '../store/open';

interface Props {
  children: ReactNode;
  className?: string;
}

const Drawer = ({ children, className }: Props) => {
  const { open, closeDrawer } = useDrawerStore((state) => state);

  useEffect(() => {
    return () => {
      closeDrawer();
    };
  }, []);

  return (
    <>
      <aside className={drawer({ open, class: className })}>{children}</aside>
      {open && (
        <div
          className={backdrop({ class: className })}
          role='presentation'
          onClick={closeDrawer}
        />
      )}
    </>
  );
};

export default Drawer;
