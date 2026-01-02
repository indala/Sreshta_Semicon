"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function MotionSection({
    children,
    className,
    delay = 0,
    direction = "up",
    ...props
}: MotionSectionProps) {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    const initial = { opacity: 0, ...directions[direction] };

    return (
        <motion.section
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
