"use client";

import { useParams } from "next/navigation";
import { projectData, ProjectType } from "@/app/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project: ProjectType | undefined = projectData.find(
    (item) => item.id.toString() === id
  );

  if (!project) return <div className="p-20 text-center">Project Not Found</div>;

  return (
    <main className="pb-20">
      {/* Hero Image */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={project.hero}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 left-10 text-white text-5xl font-bold"
        >
          {project.title}
        </motion.h1>
      </section>

      {/* Details Section */}
      <section className="max-w-5xl mx-auto px-6 mt-14">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-700 leading-relaxed"
        >
          {project.description}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-lg">
          <div>
            <strong>Year:</strong> {project.year}
          </div>
          <div>
            <strong>Location:</strong> {project.location}
          </div>
          <div>
            <strong>Size:</strong> {project.size}
          </div>
          <div>
            <strong>Category:</strong> {project.category}
          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-3xl font-bold mt-20 mb-8">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 overflow-hidden rounded-xl"
            >
              <Image
                src={img}
                alt="Project Image"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
