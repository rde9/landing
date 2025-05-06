'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimationProps {
  children: ReactNode;
  duration: number;
  delay: number;
  className?: string;
}

export const SlideInCategoryListItem = ({
  children,
  duration,
  delay,
  className = '',
}: AnimationProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 1, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.li>
  );
};

export const BlurInLogo = ({ children, duration, delay, className = '' }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{
        duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInAboutSection = ({
  children,
  duration,
  delay,
  className = '',
}: AnimationProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
