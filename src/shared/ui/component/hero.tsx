import { tv } from 'tailwind-variants';

const createStyle = tv({
  slots: {
    base: '',
    wrapper: [
      'wrapper flex flex-col items-center',
      'lg:flex-row lg:justify-between',
      'gap-16 lg:gap-10',
      'py-16 md:py-24',
    ],
  },
  variants: {
    isFirst: {
      true: {
        base: 'pt-14 md:pt-22',
      },
    },
  },
});

interface Props {
  children: ReactNode;
  className?: string;
  isFirst?: boolean;
}

const Hero = ({ children, className, isFirst }: Props) => {
  const styles = createStyle({ isFirst });

  return (
    <article className={styles.base({ class: className })}>
      <div className={styles.wrapper()}>{children}</div>
    </article>
  );
};

export default Hero;
