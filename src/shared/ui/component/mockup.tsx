import { tv } from 'tailwind-variants';

interface Props {
  children: ReactNode;
}

const createStyle = tv({
  slots: {
    base: [
      'aspect-[9/18] min-h-mockup w-full max-w-[410px]',
      'relative rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800',
      'max-md:mx-3',
    ],
    buttonLeft: [
      'top-[72px] h-[46px]', // adjust this value to change the position and height of the left button
      'absolute -start-[17px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800',
    ],
    buttonRight:
      'absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800',
    wrapper:
      'size-full overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800',
  },
});

const Mockup = ({ children }: Props) => {
  const styles = createStyle();

  return (
    <div className={styles.base()}>
      <div className={styles.buttonLeft({ class: 'h-[32px]' })} />
      <div className={styles.buttonLeft({ class: 'top-[124px]' })} />
      <div className={styles.buttonLeft({ class: 'top-[178px]' })} />
      <div className={styles.buttonRight({})} />
      <div className={styles.wrapper()}>{children}</div>
    </div>
  );
};

export default Mockup;
