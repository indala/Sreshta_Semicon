'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoIntro() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home') // replace = no back to intro
    }, 3200) // total animation duration

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-linear-to-br from-gray-300 via-gray-300 to-gray-500 overflow-hidden">
      {/* PHASE 1: Center-fullscreen logo */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [1, 1.1, 0.9],
        }}
        transition={{
          duration: 2.2,
          times: [0, 0.5, 1],
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Sreshta Logo"
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain"
          priority
        />
      </motion.div>

      {/* PHASE 2: Final layout */}
      <motion.div
        className="relative z-10 flex w-full items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.3 }}
      >
        <div className="flex w-full max-w-4xl items-center justify-center">
          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="Sreshta Logo"
            className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain shrink-0"
            initial={{ x: -20, opacity: 0, scale: 0.9 }}
            animate={{ x: 10, opacity: 1, scale: 1 }}
            transition={{ delay: 2.3, duration: 0.5, ease: 'easeOut' }}
          />

          {/* Text */}
          <motion.div
            className="ml-4 sm:ml-6 flex flex-col items-start min-w-0 mt-10"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-4xl lg:text-6xl font-bold tracking-widest text-[#8B1C1C] leading-tight">
              SRESHTA
            </h1>

            <motion.p
              className="mt-1 text-[0.65rem] sm:text-xs md:text-sm lg:text-base tracking-[0.25em] md:tracking-[0.35em] text-gray-700"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.6, ease: 'easeOut' }}
            >
              SEMICON TECHNOLOGIES PVT LTD
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
