'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  classname?: string;
  animated?: boolean;
}

const HeaderWrapper = ({ animated, ...props }: Props) => {
  if (!animated) {
    return <header {...props} />;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      {...props}
    />
  );
};

export default HeaderWrapper;
