import { tv } from 'tailwind-variants';

import { Logo } from '@/shared/ui';
import { Footer } from '@/widgets/footer';

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
  classNames?: {
    header?: string;
  };
  isHeaderSticky?: boolean;
  removeFooter?: boolean;
}

export const BasicLayout = ({
  children,
  classNames,
  isHeaderSticky,
  removeFooter,
}: Props) => {
  const styles = createStyle({ isHeaderSticky });

  return (
    <>
      <header className={styles.header({ class: classNames?.header })}>
        <Logo business={false} />
      </header>
      <main className={styles.main()}>{children}</main>
      {!removeFooter && <Footer />}
    </>
  );
};
