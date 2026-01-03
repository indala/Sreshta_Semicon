'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedIconProps {
  children: React.ReactNode;
  rotate?: number;
  scale?: number;
}

export function AnimatedIcon({ children, rotate = 10, scale = 1.2 }: AnimatedIconProps) {
  return (
    <motion.div whileHover={{ scale, rotate }}>
      {children}
    </motion.div>
  );
}
