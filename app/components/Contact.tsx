"use client";

import { motion } from "framer-motion";
import { PiMapPin, PiPhone, PiEnvelope } from "react-icons/pi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-16"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-200"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-2 font-medium">Message</label>
                <textarea
                  className="w-full p-3 h-32 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>

              <div className="flex items-start gap-4 mb-6">
                <PiMapPin size={28} className="text-gray-700 mt-1" />
                <p className="text-gray-700">
                  123 Architecture Street,<br />Ahmedabad, Gujarat, India
                </p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <PiPhone size={28} className="text-gray-700" />
                <p className="text-gray-700">+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-4">
                <PiEnvelope size={28} className="text-gray-700" />
                <p className="text-gray-700">contact@architecture.com</p>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 text-sm">
              Google Map Embed Here
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
