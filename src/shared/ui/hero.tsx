'use client';

import { type MotionProps, motion, stagger } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { hero } from './styles';

const createStyle = tv({
  extend: hero,
  slots: {
    base: 'flex w-full items-center',
    wrapper: [
      'flex flex-col items-center lg:flex-row lg:justify-between',
      'gap-16 lg:gap-10',
    ],
  },
  variants: {
    hasBackground: {
      true: {
        base: 'bg-cover bg-center bg-no-repeat',
      },
    },
  },
});

type Props = {
  children: ReactNode;
  className?: string;
  hasBackground?: boolean;
} & Pick<MotionProps, 'viewport'>;

const Hero = ({ children, className, hasBackground, viewport }: Props) => {
  const styles = createStyle({ hasBackground });

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
