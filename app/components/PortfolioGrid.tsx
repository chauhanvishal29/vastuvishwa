"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PiListBold, PiXBold } from "react-icons/pi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? "bg-black/70 backdrop-blur-md py-3" : "bg-transparent py-5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-wide text-white">
                        VastuVishwa
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-white">
                        {["Projects", "Services", "Process", "Reviews", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-gray-300 transition"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Icon */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-white text-3xl"
                    >
                        <PiListBold />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 right-0 w-3/4 h-full bg-black z-50 md:hidden p-6"
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-white text-4xl mb-8"
                        >
                            <PiXBold />
                        </button>

                        <div className="flex flex-col gap-6 text-white text-xl">
                            {["Projects", "Services", "Process", "Reviews", "Contact"].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="hover:text-gray-300 transition"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
