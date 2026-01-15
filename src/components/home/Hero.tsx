'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticWrapper from "@/components/common/MagneticWrapper";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [shapes, setShapes] = useState<{ width: number; height: number; left: string; top: string; duration: number }[]>([]);

  useEffect(() => {
    setShapes([...Array(6)].map(() => ({
      width: Math.random() * 400 + 200,
      height: Math.random() * 400 + 200,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
    })));
  }, []);

  const words = "Brains Behind the Chip".split(" ");

  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-600/40 via-red-900/60 to-black/80"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(220,38,38,0.4), rgba(127,29,29,0.6), rgba(0,0,0,0.8))",
              "linear-gradient(to bottom right, rgba(127,29,29,0.4), rgba(220,38,38,0.6), rgba(0,0,0,0.8))",
              "linear-gradient(to bottom right, rgba(220,38,38,0.4), rgba(127,29,29,0.6), rgba(0,0,0,0.8))",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        {/* Floating Abstract Shapes */}
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500/10 blur-3xl"
            style={{
              width: shape.width,
              height: shape.height,
              left: shape.left,
              top: shape.top,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 p-4"
        style={{ y: y1, opacity }}
      >
        <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 md:gap-x-4">
          {words.map((word, i) => (
            <motion.h1
              key={i}
              className="text-5xl md:text-8xl font-bold font-headline tracking-tight text-white drop-shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1.0]
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        <motion.p
          className="mt-6 text-xl md:text-3xl max-w-3xl mx-auto text-gray-200/90 font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Your Closest Access to <span className="text-red-500 font-bold">Semiconductor Excellence</span>
        </motion.p>

        <motion.div
          className="mt-12 flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <MagneticWrapper>
            <Button asChild size="lg" className="h-14 px-10 text-lg font-bold bg-white text-red-700 hover:bg-gray-100 transition-colors shadow-2xl">
              <Link href="/register">Register Now</Link>
            </Button>
          </MagneticWrapper>

          <MagneticWrapper>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-10 text-lg font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </MagneticWrapper>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}