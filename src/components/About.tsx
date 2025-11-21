'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Database, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I am a fresh graduate in Informatics Engineering with a strong passion for software development. 
              My journey in tech started with a curiosity about how things work, which led me to explore various technologies 
              from web development to mobile apps and machine learning.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I enjoy solving complex problems and turning ideas into functional, user-friendly applications. 
              I am constantly learning and adapting to new technologies to build better solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">3+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Years Coding</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 grid gap-6"
          >
            {[
              { icon: Globe, title: "Web Development", desc: "Building responsive and modern web applications using React, Next.js, and Tailwind CSS." },
              { icon: Smartphone, title: "Mobile Development", desc: "Creating native Android applications with Kotlin and cross-platform apps." },
              { icon: Database, title: "Backend Systems", desc: "Designing robust APIs and database architectures using Node.js and SQL/NoSQL." }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
