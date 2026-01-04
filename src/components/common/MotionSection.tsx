
'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function MotionSection({ children, className, delay = 0, direction = 'up' }: MotionSectionProps) {
    const pathname = usePathname();

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
            y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
