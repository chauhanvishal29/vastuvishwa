"use client";

import { motion } from "framer-motion";
import { PiBuilding, PiCompassTool, PiTreeThin } from "react-icons/pi";

const services = [
  {
    id: 1,
    title: "Architectural Design",
    desc: "Modern and functional design solutions tailored to lifestyle and environment.",
    icon: <PiBuilding size={50} />,
  },
  {
    id: 2,
    title: "Interior Design",
    desc: "Transforming spaces with premium interior concepts and material selection.",
    icon: <PiCompassTool size={50} />,
  },
  {
    id: 3,
    title: "Landscape Planning",
    desc: "Nature-integrated outdoor spaces designed with sustainability in mind.",
    icon: <PiTreeThin size={50} />,
  },
];

export default function Services(): JSX.Element {
  return (
    <section className="py-24 bg-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-16"
        >
          Services
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition border border-gray-200"
            >
              <div className="text-gray-800 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
