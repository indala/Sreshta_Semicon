'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export function AnimatedArrow() {
  return (
    <motion.span className="inline-block" whileHover={{ x: 5 }}>
      <ArrowRight className="ml-2 h-5 w-5" />
    </motion.span>
  );
}
