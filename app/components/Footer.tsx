"use client";

import { motion } from "framer-motion";
import { PiInstagramLogo, PiFacebookLogo, PiLinkedinLogo } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-14 mt-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-10">

                    {/* Brand */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-semibold tracking-wide text-white"
                    >
                        VastuVishwa
                    </motion.h3>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex gap-6 text-2xl"
                    >
                        <a href="#" className="hover:text-white transition">
                            <PiInstagramLogo />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <PiFacebookLogo />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <PiLinkedinLogo />
                        </a>
                    </motion.div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gray-700 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">

                    <p className="text-gray-400">
                        © {new Date().getFullYear()} VastuVishwa. All Rights Reserved.
                    </p>

                    <div className="flex gap-8">
                        <a href="#projects" className="hover:text-white transition">
                            Projects
                        </a>
                        <a href="#services" className="hover:text-white transition">
                            Services
                        </a>
                        <a href="#contact" className="hover:text-white transition">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
