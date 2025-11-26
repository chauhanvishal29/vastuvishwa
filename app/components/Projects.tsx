"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/app/data/projects";

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
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group relative block overflow-hidden rounded-xl shadow-lg bg-gray-900"
              >
                <Image
                  src={project.hero}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 flex flex-col justify-end p-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide mb-1">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200 line-clamp-2">
                    {project.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-amber-300">
                    View project
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
