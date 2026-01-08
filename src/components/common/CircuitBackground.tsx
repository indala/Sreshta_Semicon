"use client";

import { motion } from "framer-motion";

export const CircuitBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <pattern
                    id="circuit-pattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    {/* Circuit Lines */}
                    <path
                        d="M 10 0 V 10 H 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-white"
                    />
                    <path
                        d="M 0 10 H 10 V 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-white"
                    />

                    {/* Connection Points */}
                    <circle cx="10" cy="10" r="1" fill="currentColor" className="text-white/50" />
                    <circle cx="0" cy="10" r="1" fill="currentColor" className="text-white/50" />
                    <circle cx="20" cy="10" r="1" fill="currentColor" className="text-white/50" />
                </pattern>

                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>

            {/* Animated Signals */}
            <motion.div
                className="absolute inset-0"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }}
            />
        </div>
    );
};
