'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#F4F1DE] dark:bg-black relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1D3557] dark:bg-[#457B9D] opacity-10 shape-triangle"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-6 uppercase">Featured Projects</h2>
          <div className="w-32 h-2 bg-[#E63946]"></div>
        </motion.div>

        {/* Asymmetric grid - varying sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "KomposKita",
              description: "AI-powered waste classification web app for composting education.",
              tech: ["Next.js", "TensorFlow", "ML"],
              github: "https://github.com/diyoadisuta/KomposKita",
              demo: "https://kompos-kita-steel.vercel.app/",
              color: "#E63946",
              span: "md:col-span-1"
            },
            {
              title: "TaskWise",
              description: "Modern task management application built with Next.js.",
              tech: ["Next.js", "TypeScript", "Prisma"],
              github: "https://github.com/diyoadisuta/TaskWise",
              demo: "https://task-wise-five.vercel.app/",
              color: "#1D3557",
              span: "md:col-span-1"
            },
            {
              title: "Moodiometry",
              description: "Mental health tracking mobile app with mood monitoring.",
              tech: ["Kotlin", "Cloud", "ML"],
              github: "https://github.com/diyoadisuta/Moodiometry",
              demo: null,
              color: "#FFB703",
              span: "md:col-span-1"
            },
            {
              title: "Story Submission",
              description: "Interactive web application for story submission.",
              tech: ["JavaScript", "Vite", "CSS"],
              github: "https://github.com/diyoadisuta/StorySubmission",
              demo: null,
              color: "#E63946",
              span: "md:col-span-1"
            },
            {
              title: "Portfolio",
              description: "Modern Bauhaus-inspired portfolio website.",
              tech: ["Next.js", "TypeScript", "Framer"],
              github: "https://github.com/diyoadisuta/portofolionextjs",
              demo: null,
              color: "#1D3557",
              span: "md:col-span-2"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              className={`${project.span} bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-white p-6 relative overflow-hidden flex flex-col`}
            >
              {/* Color accent */}
              <div
                className="absolute top-0 left-0 w-2 h-full"
                style={{ backgroundColor: project.color }}
              ></div>

              <div className="flex justify-between items-start mb-4 ml-4">
                <h3 className="text-2xl font-bold text-black dark:text-white uppercase">{project.title}</h3>
                <div className="flex gap-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-2 bg-[#F4F1DE] dark:bg-black border-2 border-black dark:border-white"
                  >
                    <Github size={16} className="text-black dark:text-white" />
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 bg-[#F4F1DE] dark:bg-black border-2 border-black dark:border-white"
                    >
                      <ExternalLink size={16} className="text-black dark:text-white" />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-black dark:text-white mb-6 leading-relaxed ml-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto ml-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#F4F1DE] dark:bg-black border-2 border-black dark:border-white text-black dark:text-white text-xs font-bold uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
