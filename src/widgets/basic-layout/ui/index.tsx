import { tv } from 'tailwind-variants';

import { Logo } from '@/shared/ui';

export const createStyle = tv({
  slots: {
    wrapper: 'flex h-screen flex-col',
    header: 'py-6',
    main: 'flex shrink-0 grow basis-auto flex-col items-center',
  },
  compoundSlots: [
    {
      slots: ['header', 'main'],
      class: 'px-6',
    },
  ],
  variants: {
    isHeaderSticky: {
      true: {
        header: 'sticky top-0 z-10 bg-background',
      },
    },
  },
});

interface Props {
  children: ReactNode;
  isHeaderSticky?: boolean;
}

export const BasicLayout = ({ children, isHeaderSticky }: Props) => {
  const styles = createStyle({ isHeaderSticky });

  return (
    <>
      <header className={styles.header()}>
        <Logo business={false} />
      </header>
      <main className={styles.main()}>{children}</main>
    </>
  );
};
