'use client';

import type { ReactNode } from 'react';

import { useDrawerStore } from '../store/open';

interface Props {
  children: ReactNode;
  className?: string;
}

const Drawer = ({ children, className }: Props) => {
  const { open, closeDrawer } = useDrawerStore((state) => state);

  const translateX = open ? 'translate-x-0' : 'translate-x-full';

  return (
    <>
      <aside
        className={`${translateX} transition-transform z-50 absolute top-0 right-0 w-[300px] h-full flex flex-col bg-white ${className}`}
      >
        {children}
      </aside>
      {open && (
        <div
          className={`fixed top-0 left-0 z-40 size-full bg-black bg-opacity-50 md:hidden ${className}`}
          role='presentation'
          onClick={closeDrawer}
        />
      )}
    </>
  );
};

export default Drawer;
