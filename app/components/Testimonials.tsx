"use client";

import { motion } from "framer-motion";
import { PiQuotes } from "react-icons/pi";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Villa Owner",
    text: "Exceptional design quality! They transformed our vision into a modern and functional space. Highly professional team.",
  },
  {
    id: 2,
    name: "Sonal Patel",
    role: "Corporate Client",
    text: "Their architectural planning and attention to detail exceeded our expectations. Smooth process from start to finish.",
  },
  {
    id: 3,
    name: "Arjun Shah",
    role: "Home Renovation",
    text: "Amazing creativity and execution. The entire experience was seamless and the final result was outstanding.",
  },
];

export default function Testimonials(){
  return (
    <section className="py-24 bg-gray-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-16"
        >
          Testimonials
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200"
            >
              <PiQuotes size={40} className="text-gray-300 mb-4" />

              <p className="text-gray-700 leading-relaxed mb-6">
                “{review.text}”
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
