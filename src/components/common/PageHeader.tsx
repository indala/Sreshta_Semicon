'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string | string[];
  description: string;
  imageId: string;
};

export function PageHeader({ title, description, imageId }: PageHeaderProps) {
  const image = PlaceHolderImages.find(p => p.id === imageId);
  const [shapes, setShapes] = useState<{ width: number; height: number; left: string; top: string; duration: number }[]>([]);

  useEffect(() => {
    setShapes([...Array(4)].map(() => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 8 + 8,
    })));
  }, []);

  const lines = Array.isArray(title) ? title : title.split("|");

  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center text-center overflow-hidden bg-black">

      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          priority
          className="object-cover z-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
          data-ai-hint={image.imageHint}
        />
      )}

      {/* Dynamic Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-br from-red-600/30 via-transparent to-black/80"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(220,38,38,0.2), transparent, rgba(0,0,0,0.8))",
            "linear-gradient(to bottom right, rgba(127,29,29,0.2), transparent, rgba(0,0,0,0.8))",
            "linear-gradient(to bottom right, rgba(220,38,38,0.2), transparent, rgba(0,0,0,0.8))",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 z-10">
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
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-20 p-4 text-white flex flex-col items-center gap-2">
        {/* Responsive Container: Stacked on mobile, Row on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-0 flex-wrap">
          {lines.map((line, lineIndex) => (
            <div key={lineIndex} className="overflow-hidden flex flex-wrap justify-center gap-x-2 md:gap-x-3">
              {line.trim().split(" ").map((word, wordIndex) => (
                <motion.h1
                  key={`${lineIndex}-${wordIndex}`}
                  className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white drop-shadow-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: lineIndex * 0.2 + wordIndex * 0.1,
                    ease: [0.215, 0.61, 0.355, 1.0]
                  }}
                >
                  {word}
                </motion.h1>
              ))}
            </div>
          ))}
        </div>


        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200 drop-shadow-md font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </section >
  );
}
