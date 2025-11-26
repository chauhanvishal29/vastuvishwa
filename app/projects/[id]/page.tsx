"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { projectData, ProjectType } from "@/app/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project: ProjectType | undefined = projectData.find(
    (item) => item.id.toString() === id
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  if (!project) return <div className="p-20 text-center">Project Not Found</div>;

  const openLightbox = (img: string) => {
    setActiveImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  return (
    <main className="pb-24 pt-32">
      {/* BIG-style three-column header: meta / main image / description */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left meta column */}
          <div className="lg:col-span-3 text-xs tracking-[0.18em] uppercase space-y-4">
            <div>
              <p className="text-gray-500">Project</p>
              <p className="mt-1 text-sm font-semibold normal-case tracking-normal">
                {project.title}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Location</p>
              <p className="mt-1 text-sm font-medium normal-case tracking-normal">
                {project.location}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Year</p>
              <p className="mt-1 text-sm font-medium normal-case tracking-normal">
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Typology</p>
              <p className="mt-1 text-sm font-medium normal-case tracking-normal">
                {project.category}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Size</p>
              <p className="mt-1 text-sm font-medium normal-case tracking-normal">
                {project.size}
              </p>
            </div>
            {project.client && (
              <div>
                <p className="text-gray-500">Client</p>
                <p className="mt-1 text-sm font-medium normal-case tracking-normal">
                  {project.client}
                </p>
              </div>
            )}
            {project.status && (
              <div>
                <p className="text-gray-500">Status</p>
                <p className="mt-1 text-sm font-medium normal-case tracking-normal">
                  {project.status}
                </p>
              </div>
            )}
          </div>

          {/* Center main image */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={project.hero}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right description column */}
          <div className="lg:col-span-3 text-sm leading-relaxed text-gray-700">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              {project.description}
            </motion.p>
          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-2xl font-semibold mt-20 mb-8 uppercase tracking-[0.2em] text-gray-700">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.images.map((img, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => openLightbox(img)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Image
                src={img}
                alt="Project Image"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-sm tracking-wide">
                Click to view
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={closeLightbox}
          >
            ×
          </button>
          <div
            className="relative w-full max-w-5xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Project Large Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
