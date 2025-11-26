"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all border-b ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-sm border-gray-200"
          : "bg-white/70 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Brand */}
        <Link href="/" className="text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase text-gray-900">
          VastuVishwa
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.2em] uppercase text-gray-700">
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="#services" className="hover:text-black transition">Services</a>
          <a href="#process" className="hover:text-black transition">Process</a>
          <a href="#testimonials" className="hover:text-black transition">Reviews</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
          <Link
            href="#contact"
            className="ml-4 rounded-full border border-gray-900 px-4 py-2 text-[11px] tracking-[0.18em] uppercase hover:bg-gray-900 hover:text-white transition"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-900 px-3 py-1 text-xs uppercase tracking-[0.2em]"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-700">
              <a href="#projects" onClick={() => setOpen(false)} className="hover:text-black transition">Projects</a>
              <a href="#services" onClick={() => setOpen(false)} className="hover:text-black transition">Services</a>
              <a href="#process" onClick={() => setOpen(false)} className="hover:text-black transition">Process</a>
              <a href="#testimonials" onClick={() => setOpen(false)} className="hover:text-black transition">Reviews</a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-black transition">Contact</a>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-gray-900 px-4 py-2 text-[11px] tracking-[0.18em] uppercase hover:bg-gray-900 hover:text-white transition"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
