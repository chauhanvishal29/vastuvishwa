"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Villa — 2024",
    img: "/projects/project1.jpg",
  },
  {
    id: 2,
    title: "Corporate Office Interior",
    img: "/projects/project2.jpg",
  },
  {
    id: 3,
    title: "Luxury Bungalow Design",
    img: "/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Urban Apartment Concept",
    img: "/projects/project4.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <p className="text-white text-lg font-semibold p-4">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
