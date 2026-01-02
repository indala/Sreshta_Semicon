"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface MotionGridProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    staggerDelay?: number;
}

export function MotionGrid({
    children,
    className,
    staggerDelay = 0.1,
    ...props
}: MotionGridProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
