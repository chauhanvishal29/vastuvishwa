"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-gray-900">
          VastuVishwa
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-gray-800 font-medium">
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="#services" className="hover:text-black transition">Services</a>
          <a href="#process" className="hover:text-black transition">Process</a>
          <a href="#testimonials" className="hover:text-black transition">Reviews</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
