'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "KomposKita",
              description: "AI-powered waste classification web app for composting education. Helps users identify compostable waste and provides composting guidance.",
              tech: ["Next.js", "TensorFlow", "Machine Learning", "Supabase"],
              image: "♻️",
              github: "https://github.com/diyoadisuta/KomposKita",
              demo: "https://kompos-kita-steel.vercel.app/",
              color: "from-green-400 to-emerald-600"
            },
            {
              title: "TaskWise",
              description: "Modern task management application built with Next.js. Features task organization, priority management, and productivity tracking.",
              tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
              image: "📋",
              github: "https://github.com/diyoadisuta/TaskWise",
              demo: "https://task-wise-five.vercel.app/",
              color: "from-blue-400 to-indigo-600"
            },
            {
              title: "Moodiometry",
              description: "Bangkit 2024 Capstone Project - Mental health tracking mobile app with mood monitoring and stress level analysis for better well-being.",
              tech: ["Kotlin", "Cloud Computing", "Machine Learning", "Mobile Development"],
              image: "📱",
              github: "https://github.com/diyoadisuta/Moodiometry",
              demo: null,
              color: "from-purple-400 to-pink-600"
            },
            {
              title: "Story Submission",
              description: "Interactive web application for story submission and management. Built with modern JavaScript and responsive design principles.",
              tech: ["JavaScript", "Vite", "CSS", "HTML"],
              image: "📝",
              github: "https://github.com/diyoadisuta/StorySubmission",
              demo: null,
              color: "from-orange-400 to-red-600"
            },
            {
              title: "Portfolio Website",
              description: "Modern, responsive portfolio website showcasing my projects and skills. Built with Next.js and featuring smooth animations.",
              tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              image: "🎨",
              github: "https://github.com/diyoadisuta/portofolionextjs",
              demo: null,
              color: "from-cyan-400 to-blue-600"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700 text-4xl shadow-sm">
                    {project.image}
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      title="View Code"
                    >
                      <Github size={18} />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
