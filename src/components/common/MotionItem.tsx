"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface MotionItemProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export function MotionItem({ children, className, ...props }: MotionItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
