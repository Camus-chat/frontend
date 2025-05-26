import { tv } from 'tailwind-variants';

const createStyle = tv({
  slots: {
    base: 'wrapper',
    wrapper: [
      'flex items-center lg:gap-10',
      'flex-col lg:flex-row',
      'lg:justify-between',
      'py-16 md:py-24',
    ],
  },
});

interface Props {
  children: ReactNode;
  classNames?: {
    base?: string;
    wrapper?: string;
  };
}

const Hero = ({ children, classNames }: Props) => {
  const styles = createStyle();

  return (
    <article className={styles.base({ class: classNames?.base })}>
      <div className={styles.wrapper({ class: classNames?.wrapper })}>
        {children}
      </div>
    </article>
  );
};

export default Hero;
