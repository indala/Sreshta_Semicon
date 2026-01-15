'use client';

import { motion, useInView, Variant } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    viewport?: { once?: boolean; margin?: string };
    variants?: {
        hidden: Variant;
        visible: Variant;
    };
}

export const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export function ScrollAnimation({
    children,
    className,
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: '-50px' },
    variants = fadeInUpVariants,
}: ScrollAnimationProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay, duration, ease: "easeOut" }}
            variants={variants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className,
    delay = 0,
    viewport = { once: true, margin: '-50px' },
}: ScrollAnimationProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainerVariants}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
