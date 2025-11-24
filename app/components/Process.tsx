"use client";

import { motion } from "framer-motion";
import { PiLightbulb, PiRuler, PiBuildings, PiCheckCircle } from "react-icons/pi";

const steps = [
  {
    id: 1,
    title: "Concept",
    description: "Understanding client needs, site conditions, and early brainstorming.",
    icon: <PiLightbulb size={40} />,
  },
  {
    id: 2,
    title: "Design",
    description: "Creating architectural drawings, 3D models, and refining aesthetics.",
    icon: <PiRuler size={40} />,
  },
  {
    id: 3,
    title: "Development",
    description: "Technical detailing, material selection, and structural planning.",
    icon: <PiBuildings size={40} />,
  },
  {
    id: 4,
    title: "Execution",
    description: "On-site supervision, finishing, and final handover.",
    icon: <PiCheckCircle size={40} />,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-16"
        >
          Our Process
        </motion.h2>

        {/* Steps Timeline */}
        <div className="relative border-l-2 border-gray-300 ml-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-14 pl-10 relative"
            >
              {/* Dot + Icon */}
              <div className="absolute -left-7 top-1 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg">
                {step.icon}
              </div>

              {/* Step Content */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
