'use client';

import { type MotionProps, motion, stagger } from 'framer-motion';
import { tv } from 'tailwind-variants';

const createStyle = tv({
  slots: {
    base: 'w-full',
    wrapper: [
      'hero wrapper flex flex-col items-center',
      'lg:flex-row lg:justify-between',
      'gap-16 lg:gap-10',
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

type Props = {
  children: ReactNode;
  className?: string;
  isFirst?: boolean;
} & Pick<MotionProps, 'viewport'>;

const Hero = ({ children, className, isFirst, viewport }: Props) => {
  const styles = createStyle({ isFirst });

  return (
    <motion.article
      viewport={viewport}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1.5,
            delayChildren: stagger(0.5),
          },
        },
      }}
      initial='hidden'
      whileInView='visible'
      className={styles.base({ class: className })}
    >
      <div className={styles.wrapper()}>{children}</div>
    </motion.article>
  );
};

export default Hero;
