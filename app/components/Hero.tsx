"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">

      {/* Background Image */}
      <Image
        src="/hero-architecture.jpg"
        alt="Architecture"
        fill
        priority
        className="object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text Content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-white tracking-wide"
        >
          Designing Spaces with Purpose
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-6 text-lg md:text-2xl text-gray-200"
        >
          Architecture · Interior · Urban Planning
        </motion.p>
      </div>
    </section>
  );
}
