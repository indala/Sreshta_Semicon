'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";

// Dynamically load 3D scene to avoid SSR issues
const HeroScene3D = dynamic(() => import("./HeroScene3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene3D />
      </div>

      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

      <motion.div
        className="relative z-10 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Brains Behind the Chip
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Your Closest Access to Semiconductor Excellence
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="font-bold bg-gray-500 hover:bg-gray-700">
            <Link href="/register">Register Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-bold bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
